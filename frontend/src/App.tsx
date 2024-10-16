import { useEffect, useState } from 'react'
import api from './service/api'
import styled from 'styled-components'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { InputFieldComponent } from './components/InputFieldComponent'
import { ButtonComponent } from './components/ButtonComponent'
import Collapsible from './components/CollapsibleComponent'
import myImage from './assets/LinkedInQr.png'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [qrCode, setQrCode] = useState<any>()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const handleToggle = (index: number) => {
    console.log(index)
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <StyledContainer>
      <HeaderComponent />

      <StyledSection>
        <Item1>
          <StyledImg src={myImage} alt="QR-Code for linkedIn Profile" />
        </Item1>
        <Item2>
          <Collapsible
            open={openIndex === 0}
            title="What is a QR Code?"
            onToggle={() => handleToggle(0)}
          >
            A QR (Quick Response) code is a type of two-dimensional barcode that
            can be scanned by smartphones and other devices to quickly access
            information. Unlike traditional barcodes, QR codes can store much
            more data and can be scanned from any direction, making them faster
            and easier to use.
          </Collapsible>
          <Collapsible
            title="What is a QR Code?"
            open={openIndex === 1}
            onToggle={() => handleToggle(1)}
          >
            A QR (Quick Response) code is a type of two-dimensional barcode that
            can be scanned by smartphones and other devices to quickly access
            information. Unlike traditional barcodes, QR codes can store much
            more data and can be scanned from any direction, making them faster
            and easier to use.
          </Collapsible>
        </Item2>
      </StyledSection>
      <StyledSection>
        {qrCode ? (
          <QRCodeContainer>
            <StyledImg src={`data:image/png;base64,${qrCode}`} alt="QR Code" />
          </QRCodeContainer>
        ) : (
          <EmptyArea />
        )}

        <Item2>
          <InputFieldComponent
            onChange={handleChange}
            value={searchTerm}
            placeholder="Enter Link"
            type="text"
          />
          <ButtonComponent onClick={handleSubmit} type="submit">
            Generate QR
          </ButtonComponent>
        </Item2>
      </StyledSection>
      <FooterComponent />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
  min-height: 100vh;
`

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'a b';
  gap: 1.5rem;
  padding: 2rem;
  color: #38124a;
  margin: 1rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
`

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: a;
  width: 100%;
`

const Item1 = styled.div`
  grid-area: a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
`

const Item2 = styled.div`
  grid-area: b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const EmptyArea = styled.div`
  grid-area: a;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`
export default App
