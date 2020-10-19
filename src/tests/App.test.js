import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders learn react link', () => {
  render(<App />)
  screen.debug()
  const title = screen.getByText(/pintereach/i)
  console.log(title)
  expect(title).notw.toBeNull()
})
