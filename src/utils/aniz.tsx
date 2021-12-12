import { FC, useEffect, useRef } from 'react'
import React from 'react'

export const Animated: FC<{
  force: (d: number, v: number) => number
  initial: number
  target: number
}> = props => {
  const { current: state } = useRef({
    d: 0,
    v: 0,
    t: 0,
    target: props.target,
  })
  const elementRef = useRef<HTMLDivElement>(null)
  function paint() {
    const element = elementRef.current
    if (!element) return
    element.style.transform = `translateX(${state.d * 10}px)`
    // element.innerText = state.d.toFixed(1)
  }

  useEffect(() => {
    let id: number | null = null
    state.t = performance.now()
    function step(timestamp: number) {
      if (Math.abs(state.target - state.d) < 0.1 && Math.abs(state.v) < 0.1) {
        state.d = state.target
        id = null
        paint()
        return
      }
      const tDelta = (timestamp - state.t) / 1000
      const a = props.force(state.d, state.v)
      // const nextV = state.v + a * tDelta
      const nextV = (state.v + a * tDelta) * 0.99
      state.d += state.v * tDelta
      state.d += ((state.v + nextV) / 2) * tDelta
      state.v = nextV
      state.t = timestamp
      paint()
      id = window.requestAnimationFrame(step)
    }
    id = window.requestAnimationFrame(step)
    return () => {
      if (id !== null) {
        window.cancelAnimationFrame(id)
      }
    }
  }, [])
  return <div ref={elementRef}>X</div>
}
