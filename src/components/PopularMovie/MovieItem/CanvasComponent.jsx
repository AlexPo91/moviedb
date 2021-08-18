import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const CanvasComponnent = ({ voteAverage }) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    context.lineWidth = 1
    context.strokeStyle = "#132020"
    context.fillStyle = "#132020"
    context.beginPath()
    context.arc(50, 50, 25, 0, Math.PI * 2, false)
    context.fill()
    context.stroke()
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = "#1a3300"
    context.arc(50, 50, 22.5, 0, Math.PI * 2, false)
    context.stroke()
    context.beginPath()
    context.lineWidth = 5
    context.strokeStyle = "#428000"
    context.arc(
      50,
      50,
      22.5,
      (Math.PI / 180) * 270,
      (Math.PI / 180) * (270 + 3.6 * voteAverage * 10),
      false
    )
    context.stroke()
  }, [])
  return <canvas ref={canvasRef} width="100" height="100" />
}

export default CanvasComponnent
CanvasComponnent.propTypes = {
  voteAverage: PropTypes.number.isRequired,
}
