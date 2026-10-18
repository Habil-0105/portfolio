import { render, screen } from '@testing-library/react'
import App from './App'
import { ThemeProvider } from './contexts/theme'

test('renders hero with positioning and primary sections', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )

  // Verify Hero positioning headline
  expect(screen.getByText(/Full-stack engineering\./i)).toBeInTheDocument()

  // Verify key navigation/section headers
  expect(screen.getByText(/Selected Projects/i)).toBeInTheDocument()
  expect(
    screen.getByText(/Professional & Educational Experience/i)
  ).toBeInTheDocument()
  expect(
    screen.getByText(/Core Capabilities & Engineering Stack/i)
  ).toBeInTheDocument()
  expect(screen.getByText(/About & Approach to Software/i)).toBeInTheDocument()
})
