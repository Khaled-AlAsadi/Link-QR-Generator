import { useEffect, useState } from 'react'
import api from './service/api'
import styled from 'styled-components'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
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
      <HeaderComponent />

      <StyledSection>
        <InputFieldComponent
          onChange={handleChange}
          value={searchTerm}
          placeholder="Enter Link"
          type="text"
        />
        <ButtonComponent onClick={handleSubmit} type="submit">
          Generate QR
        </ButtonComponent>
        {qrCode && (
          <QRCodeContainer>
            <img src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
          </QRCodeContainer>
        )}
      </StyledSection>
      <FooterComponent />
    </StyledContainer>
  )
}

const StyledContainer = styled.div``

const StyledSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: #ffffff;
  color: #38124a;
  border: 10px red dotted;
`

const QRCodeContainer = styled.div`
  margin-top: 1.5rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid #ee544a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`

export default App
