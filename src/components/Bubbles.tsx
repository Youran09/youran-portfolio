"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function Bubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubbles = useRef<Bubble[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createBubbles = () => {
      bubbles.current = []
      const bubbleCount = Math.floor(window.innerWidth / 100) // Adjust number of bubbles based on screen width

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.current.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 100,
          size: Math.random() * 30 + 10,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawBubbles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.current.forEach((bubble, index) => {
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`
        ctx.fill()

        // Move bubble up
        bubble.y -= bubble.speed

        // Add slight horizontal movement
        bubble.x += Math.sin(bubble.y / 50) * 0.5

        // Reset bubble when it goes off screen
        if (bubble.y < -bubble.size * 2) {
          bubble.y = canvas.height + bubble.size
          bubble.x = Math.random() * canvas.width
        }
      })

      animationRef.current = requestAnimationFrame(drawBubbles)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    createBubbles()
    drawBubbles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0" />
}
