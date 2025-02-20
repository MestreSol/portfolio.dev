'use client'
import React, { useEffect, useRef } from 'react'
import styles from './page.module.css'
import global from '@/global/style.module.css'
export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = event
        const { innerWidth, innerHeight } = window
        const xPercent = (clientX / innerWidth) * 100
        const yPercent = (clientY / innerHeight) * 100
        backgroundRef.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={global.page}>
      <div ref={backgroundRef} className={styles.background}></div>
    </div>
  )
}
