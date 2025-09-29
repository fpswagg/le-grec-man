"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({ children, className, staggerDelay = 100, once = true }: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [once])

  return (
    <div ref={ref} className={cn(className)}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className="transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 30px, 0)",
                transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
