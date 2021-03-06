import { css } from '@emotion/react'
import React, { useEffect } from 'react'
import Canvas, {
  Handler as CanvasHandler,
  Props as CanvasProps,
} from '/@/components/Canvas'

export type Props = {
  width: number
  height: number
  adjacentColors?: ('gray' | 'yellow' | null)[][] // 3 * 3 が想定されている
  hasShadow?: boolean
} & CanvasProps

export type Handler = CanvasHandler

const MainCanvas: React.ForwardRefRenderFunction<Handler, Props> = (
  props,
  ref
) => {
  const mainCanvasRef = React.useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = mainCanvasRef.current
    if (canvas === null) return
    const ctx = canvas.getContext('2d')
    if (ctx === null) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (props.adjacentColors !== undefined) {
      props.adjacentColors.forEach((adjacentColor, i) => {
        adjacentColor.forEach((color, j) => {
          if (color === null) return
          const rgb = color === 'gray' ? '#ABACB8' : '#F6DF93'
          ctx.fillStyle = rgb
          ctx.fillRect(
            i === 0 ? 0 : i === 1 ? canvas.width / 7 : (canvas.width * 6) / 7,
            j === 0 ? 0 : j === 1 ? canvas.height / 7 : (canvas.height * 6) / 7,
            i === 0 || i === 2 ? canvas.width / 7 : (canvas.width * 5) / 7,
            j === 0 || j === 2 ? canvas.height / 7 : (canvas.height * 5) / 7
          )
        })
      })
    }
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(canvas.width / 7, 0)
    ctx.lineTo(canvas.width / 7, canvas.height / 7)
    ctx.lineTo(0, canvas.height / 7)
    ctx.moveTo(canvas.width, canvas.height / 7)
    ctx.lineTo((canvas.width * 6) / 7, canvas.height / 7)
    ctx.lineTo((canvas.width * 6) / 7, 0)
    ctx.moveTo((canvas.width * 6) / 7, canvas.height)
    ctx.lineTo((canvas.width * 6) / 7, (canvas.height * 6) / 7)
    ctx.lineTo(canvas.width, (canvas.height * 6) / 7)
    ctx.moveTo(0, (canvas.height * 6) / 7)
    ctx.lineTo(canvas.width / 7, (canvas.height * 6) / 7)
    ctx.lineTo(canvas.width / 7, canvas.height)
    ctx.stroke()
    ctx.closePath()
    ctx.strokeStyle = '#DA3116'
    ctx.beginPath()
    ctx.moveTo(canvas.width / 7, canvas.height / 7)
    ctx.lineTo((canvas.width * 6) / 7, canvas.height / 7)
    ctx.lineTo((canvas.width * 6) / 7, (canvas.height * 6) / 7)
    ctx.lineTo(canvas.width / 7, (canvas.height * 6) / 7)
    ctx.lineTo(canvas.width / 7, canvas.height / 7)
    ctx.stroke()
    ctx.closePath()
  }, [mainCanvasRef, props.adjacentColors])

  return (
    <div
      css={css`
        position: relative;
        width: ${props.width}px;
        height: ${props.height}px;
        border: 3px solid #000;
        overflow: hidden;
        background-color: #fff;
        ${props.hasShadow ? 'box-shadow: 8px 8px 0 #000;' : ''}
      `}
    >
      <canvas
        ref={mainCanvasRef}
        width={props.width}
        height={props.height}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      />
      <span
        css={css`
          position: absolute;
          top: ${props.height / 7 + 1.5}px;
          left: ${props.width / 7 + 1.5}px;
          z-index: 4;
        `}
      >
        <Canvas
          {...props}
          width={(props.width * 5) / 7 - 3}
          height={(props.height * 5) / 7 - 3}
          ref={ref}
        />
      </span>
    </div>
  )
}

export default React.forwardRef(MainCanvas)
