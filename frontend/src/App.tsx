import { useEffect, useState } from 'react'
import api from './service/api'
import styled from 'styled-components'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import { InputFieldComponent } from './components/InputFieldComponent'
import { ButtonComponent } from './components/ButtonComponent'
import Collapsible from './components/CollapsibleComponent'
import myImage from './assets/LinkedInQr.png'
import { LoadingSpinner } from './components/LoadingSpinner'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [qrCode, setQrCode] = useState<any>()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isRequestLoading, setIsRequestLoading] = useState<boolean>(false)
  useEffect(() => {
    const ping = async () => {
      setIsRequestLoading(true)
      try {
        await api.get('/')
        setIsRequestLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    ping()
  }, [])

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
    }
  }

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const onDownloadClick = () => {
    const link = document.createElement('a')
    link.href = `data:image/png;base64,${qrCode}`
    link.download = 'QRCode.png'
    link.click()
  }

  return (
    <>
      <HeaderComponent />
      <StyledMain role="main">
        {isRequestLoading ? (
          <StyledBox aria-live="polite">
            <StyledLoadingContainer>
              <StyledTitle>
                Api is spinning up, Might take up to 60 seconds. please wait...
              </StyledTitle>
              <LoadingSpinner aria-hidden="true" />
            </StyledLoadingContainer>
          </StyledBox>
        ) : (
          <>
            <StyledSection>
              <Item1>
                <StyledImg
                  src={myImage}
                  alt="QR-Code Image for linkedIn Profile"
                />
              </Item1>
              <Item2>
                <Collapsible
                  open={openIndex === 0}
                  title="What is a QR Code?"
                  onToggle={() => handleToggle(0)}
                  aria-expanded={openIndex === 0}
                >
                  A QR (Quick Response) code is a type of two-dimensional
                  barcode that can be scanned by smartphones and other devices
                  to quickly access information. Unlike traditional barcodes, QR
                  codes can store much more data and can be scanned from any
                  direction, making them faster and easier to use.
                </Collapsible>
                <Collapsible
                  open={openIndex === 1}
                  title="What are the benefits of using QR Codes?"
                  onToggle={() => handleToggle(1)}
                  aria-expanded={openIndex === 1}
                >
                  They are gaining popularity because of their versatility. You
                  can use them to gather feedback to improve your products or
                  services, increase customer engagement with images or videos,
                  or even promote your business via events and coupons. All of
                  these can be done with just a single scan!
                </Collapsible>
              </Item2>
            </StyledSection>
            <StyledSection>
              {qrCode ? (
                <QRCodeContainer>
                  <StyledImg
                    src={`data:image/png;base64,${qrCode}`}
                    alt="QR Code"
                  />
                  <ButtonComponent onClick={onDownloadClick}>
                    Download QR Code
                  </ButtonComponent>
                </QRCodeContainer>
              ) : (
                <EmptyArea aria-hidden={true} />
              )}

              <Item2>
                <InputFieldComponent
                  onChange={handleChange}
                  value={searchTerm}
                  placeholder="Enter Link "
                  type="text"
                />
                <ButtonComponent onClick={handleSubmit}>
                  Generate QR Code for entered link
                </ButtonComponent>
              </Item2>
            </StyledSection>
          </>
        )}
      </StyledMain>
      <FooterComponent />
    </>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  gap: 1rem;
  min-height: calc(100vh - 100px);
  background-color: #20201f;
  flex-grow: 1;
`

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  flex: 1;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
  border: 1px solid #424242;
`

const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Item1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  max-width: 80%;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
`

const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const EmptyArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`

const StyledTitle = styled.h2`
  color: #fff;
  font-size: 18px;
`

const StyledBox = styled.section`
  min-height: calc(100vh - 100px);
`

const StyledLoadingContainer = styled.section`
  align-items: center;
  display: inline-flex;
  gap: 0.5rem;
`
export default App
