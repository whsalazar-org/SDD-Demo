import { useState } from 'react'
import './Counter.css'

const STEP_OPTIONS = [1, 5, 10] as const

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState<(typeof STEP_OPTIONS)[number]>(1)

  const increment = () => setCount((current) => current + step)
  const decrement = () => setCount((current) => Math.max(0, current - step))
  const reset = () => setCount(0)

  return (
    <div className="counter-widget">
      <p className="counter-value" aria-live="polite">
        Count: <strong data-testid="count">{count}</strong>
      </p>
      <div className="counter-controls">
        <button type="button" onClick={decrement} disabled={count === 0}>
          Decrement
        </button>
        <button type="button" onClick={increment}>
          Increment
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
      <label className="counter-step">
        Step size:{' '}
        <select
          value={step}
          onChange={(event) =>
            setStep(Number(event.target.value) as (typeof STEP_OPTIONS)[number])
          }
        >
          {STEP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Counter
