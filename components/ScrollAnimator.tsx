'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface ScrollAnimatorProps {
  children: ReactNode
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'fade'
  delay?: number
  className?: string
  threshold?: number
}

export default function ScrollAnimator({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  const animationClass = {
    'fade-up': 'scroll-animate',
    'fade-left': 'scroll-animate-left',
    'fade-right': 'scroll-animate-right',
    'scale': 'scroll-animate-scale',
    'fade': 'scroll-animate',
  }[animation]

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
