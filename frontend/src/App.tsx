import { useState } from 'react'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    console.log(`Searching for ${searchTerm}...`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  )
}

export default App
