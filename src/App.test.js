import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import Details from './components/Details'
import SingleDay from './components/SingleDay'

//Mi da un errore strano e non sono riuscito a risolvere
// Cannot find module 'react-router-dom' from 'src/App.js'

describe('Test del form', () => {
  test("Il form all'avvio c'è", () => {
    render(<App />)
    const button = screen.getByText(/search/i)
    expect(button).toBeInTheDocument()
  })

  test('Il form dopo aver cliccato una card scompare', () => {
    render(<App />)
    const cards = screen.getAllByRole('button')
    fireEvent.click(cards[2])
    const button = screen.queryByText(/search/i)
    expect(button).toBeNull()
  })
})

describe('Test del ritorno alla home', () => {
  test('Cliccando Delete Location in Details', () => {
    render(<Details />)
    const deleteButton = screen.queryByText(/Remove Location/i)
    const searchButton = screen.getByText(/search/i)
    fireEvent.click(deleteButton)
    expect(searchButton).toBeInTheDocument()
  })
  test('Cliccando il titolo nella Navbar da Details', () => {
    render(<Details />)
    const Title = screen.getByText(/Torres Meteo/i)
    fireEvent.click(Title)
    const button = screen.getByText(/search/i)
    expect(button).toBeInTheDocument()
  })
  test('Cliccando il titolo nella Navbar da SingleDay', () => {
    render(<SingleDay />)
    const Title = screen.getByText(/Torres Meteo/i)
    fireEvent.click(Title)
    const button = screen.getByText(/search/i)
    expect(button).toBeInTheDocument()
  })
})
