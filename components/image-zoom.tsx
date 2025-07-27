"use client"

import type React from "react"

import { useState, useRef } from "react"

interface ImageZoomProps {
  src: string
  alt: string
  className?: string
}

export default function ImageZoom({ src, alt, className = "" }: ImageZoomProps) {
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    setIsZooming(true)
  }

  const handleMouseLeave = () => {
    setIsZooming(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    // Calculate mouse position relative to the image container
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Calculate the percentage position
    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    // Set zoom position for the magnifier
    setZoomPosition({ x, y })

    // Set image position for the zoomed view (inverted for natural feel)
    setImagePosition({
      x: -xPercent * 2, // Multiply by 2 for 2x zoom effect
      y: -yPercent * 2,
    })
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Main Image */}
      <img
        ref={imageRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-200"
      />

      {/* Magnifier Overlay */}
      {isZooming && (
        <>
          {/* Magnifier Square */}
          <div
            className="absolute border-2 border-white shadow-lg pointer-events-none bg-white bg-opacity-20"
            style={{
              width: "150px",
              height: "150px",
              left: `${zoomPosition.x - 75}px`,
              top: `${zoomPosition.y - 75}px`,
              transform: "translate(0, 0)",
            }}
          />

          {/* Zoomed Image Container */}
          <div
            className="absolute top-0 right-0 w-80 h-80 border-2 border-gray-300 bg-white shadow-2xl overflow-hidden z-20"
            style={{
              transform: "translateX(100%)",
            }}
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`${alt} - Zoomed`}
              className="w-full h-full object-cover"
              style={{
                transform: `scale(2.5) translate(${imagePosition.x}%, ${imagePosition.y}%)`,
                transformOrigin: "top left",
              }}
            />
          </div>
        </>
      )}

      {/* Zoom Hint */}
      <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
        🔍 Hover to zoom
      </div>
    </div>
  )
}
