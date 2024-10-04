import { useEffect, useState } from 'react'
import api from './service/api'
import styled from 'styled-components'
import { InputFieldComponent } from './components/InputFieldComponent'
import { ButtonComponent } from './components/ButtonComponent'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [qrCode, setQrCode] = useState<any>()

  useEffect(() => {
    const ping = async () => {
      try {
        await api.get('/')
      } catch (error) {
        console.error(error)
      }
    }
    ping()
  })

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
    const regex = new RegExp(expression)
    if (searchTerm.match(regex)) {
      const req = await api.post('/generate', { link: searchTerm })

      setQrCode(req.data.code)
    } else {
      alert('No match')
    }
  }

  return (
    <StyledContainer>
      <InputFieldComponent
        onChange={handleChange}
        value={searchTerm}
        placeholder="Link"
        type="text"
      />
      <ButtonComponent onClick={handleSubmit} type={'submit'}>
        Generate QR
      </ButtonComponent>
      {qrCode && (
        <div>
          <h3>Your QR Code:</h3>
          <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
        </div>
      )}
    </StyledContainer>
  )
}
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export default App
