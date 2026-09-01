import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import Counter from './Counter'

// Scenarios below map 1:1 to openspec/changes/add-counter-widget/specs/counter/spec.md

describe('Counter', () => {
  it('displays a count of 0 on initial render', () => {
    render(<Counter />)
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('increments from zero using the default step of 1', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.click(screen.getByRole('button', { name: 'Increment' }))

    expect(screen.getByTestId('count')).toHaveTextContent('1')
  })

  it('increments using a custom step', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    await user.selectOptions(screen.getByRole('combobox'), '5')
    await user.click(screen.getByRole('button', { name: 'Increment' }))

    expect(screen.getByTestId('count')).toHaveTextContent('5')
  })

  it('decrements above zero', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const increment = screen.getByRole('button', { name: 'Increment' })
    await user.click(increment)
    await user.click(increment)
    await user.click(increment)
    await user.click(increment)
    await user.click(increment)
    await user.click(screen.getByRole('button', { name: 'Decrement' }))

    expect(screen.getByTestId('count')).toHaveTextContent('4')
  })

  it('clamps decrement at zero and disables the control', () => {
    render(<Counter />)

    const decrement = screen.getByRole('button', { name: 'Decrement' })
    expect(decrement).toBeDisabled()
    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('resets the count back to 0', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const increment = screen.getByRole('button', { name: 'Increment' })
    for (let i = 0; i < 12; i += 1) {
      await user.click(increment)
    }
    expect(screen.getByTestId('count')).toHaveTextContent('12')

    await user.click(screen.getByRole('button', { name: 'Reset' }))

    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  it('changing the step size does not change the count', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const increment = screen.getByRole('button', { name: 'Increment' })
    await user.click(increment)
    await user.click(increment)
    await user.click(increment)
    expect(screen.getByTestId('count')).toHaveTextContent('3')

    await user.selectOptions(screen.getByRole('combobox'), '10')

    expect(screen.getByTestId('count')).toHaveTextContent('3')
  })
})
