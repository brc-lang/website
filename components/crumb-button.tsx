"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface Crumb {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  delay: number
}

interface CrumbButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  className?: string
  href?: string
}

export function CrumbButton({ children, onClick, variant = "primary", className, href }: CrumbButtonProps) {
  const [crumbs, setCrumbs] = useState<Crumb[]>([])
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const crumbIdRef = useRef(0)

  const createCrumbs = useCallback((e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return

    const newCrumbs: Crumb[] = []
    for (let i = 0; i < 8; i++) {
      newCrumbs.push({
        id: crumbIdRef.current++,
        x: e.clientX - rect.left + (Math.random() - 0.5) * 30,
        y: e.clientY - rect.top,
        size: Math.random() * 6 + 3,
        rotation: Math.random() * 360,
        delay: Math.random() * 0.1,
      })
    }
    setCrumbs((prev) => [...prev, ...newCrumbs])

    setTimeout(() => {
      setCrumbs((prev) => prev.filter((c) => !newCrumbs.find((nc) => nc.id === c.id)))
    }, 1000)
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    createCrumbs(e)
    onClick?.()
  }

  const baseStyles = cn(
    "relative overflow-visible px-6 py-3 rounded-md font-medium transition-all duration-300",
    "hover:scale-105 active:scale-95 cursor-pointer",
    {
      "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
      "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
      "border-2 border-primary text-primary hover:bg-primary/10": variant === "outline",
    },
    className,
  )

  const content = (
    <>
      {children}
      {crumbs.map((crumb) => (
        <span
          key={crumb.id}
          className="absolute pointer-events-none animate-crumb-fall"
          style={{
            left: crumb.x,
            top: crumb.y,
            width: crumb.size,
            height: crumb.size,
            backgroundColor: "var(--primary)",
            borderRadius: "50% 50% 50% 40%",
            transform: `rotate(${crumb.rotation}deg)`,
            animationDelay: `${crumb.delay}s`,
          }}
        />
      ))}
    </>
  )

  if (href) {
    return (
      <a ref={buttonRef as React.RefObject<HTMLAnchorElement>} href={href} className={baseStyles} onClick={handleClick}>
        {content}
      </a>
    )
  }

  return (
    <button ref={buttonRef as React.RefObject<HTMLButtonElement>} className={baseStyles} onClick={handleClick}>
      {content}
    </button>
  )
}
