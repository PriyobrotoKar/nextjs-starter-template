import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'

it('Page', () => {
  render(<Page />)
  expect(screen.getByText('Save and see your changes instantly.')).toBeDefined()
})
