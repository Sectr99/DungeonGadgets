'use client'

import { useEffect, useRef } from 'react'

const PALETTE = [
  { r: 110, g: 231, b: 160 },
  { r: 251, g: 191, b:  36 },
  { r: 212, g: 168, b:  64 },
  { r: 248, g: 113, b: 113 },
  { r: 180, g: 100, b: 255 },
]

interface Particle {
  x: number; y: number
  radius: number
  speedY: number; speedX: number
  maxOpacity: number
  r: number; g: number; b: number
  life: number; maxLife: number
  wobble: number; wobbleSpeed: number
}

function makeParticle(W: number, H: number, scatter = false): Particle {
  const c = PALETTE[Math.floor(Math.random() * PALETTE.length)]
  const maxLife = Math.random() * 400 + 200
  return {
    x: Math.random() * W,
    y: scatter ? Math.random() * H : H + 10,
    radius: Math.random() * 1.4 + 0.3,
    speedY: Math.random() * 0.4 + 0.15,
    speedX: (Math.random() - 0.5) * 0.25,
    maxOpacity: Math.random() * 0.5 + 0.1,
    r: c.r, g: c.g, b: c.b,
    life: scatter ? Math.random() * maxLife : 0,
    maxLife,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: (Math.random() - 0.5) * 0.02,
  }
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let particles: Particle[] = []

    function init() {
      canvas!.width  = window.innerWidth
      canvas!.height = window.innerHeight
      const count = Math.floor((canvas!.width * canvas!.height) / 10000)
      particles = Array.from({ length: count }, () =>
        makeParticle(canvas!.width, canvas!.height, true)
      )
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach((p, i) => {
        p.life++
        p.wobble += p.wobbleSpeed
        p.x += p.speedX + Math.sin(p.wobble) * 0.15
        p.y -= p.speedY
        const t = p.life / p.maxLife
        const fade = t < 0.2 ? t / 0.2 : t > 0.8 ? (1 - t) / 0.2 : 1
        const alpha = p.maxOpacity * fade
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.shadowBlur = p.radius * 6
        ctx.shadowColor = `rgba(${p.r},${p.g},${p.b},${alpha * 0.8})`
        ctx.fillStyle   = `rgba(${p.r},${p.g},${p.b},${alpha})`
        ctx.fill()
        ctx.shadowBlur = 0
        if (p.life >= p.maxLife || p.y < -10 || p.x < -20 || p.x > canvas!.width + 20) {
          particles[i] = makeParticle(canvas!.width, canvas!.height)
        }
      })
      animId = requestAnimationFrame(draw)
    }

    const onResize = () => { init(); }
    window.addEventListener('resize', onResize)
    init()
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} id="bg-canvas" />
      <div className="bg-gradient" />
      <div className="bg-noise" />
    </>
  )
}
