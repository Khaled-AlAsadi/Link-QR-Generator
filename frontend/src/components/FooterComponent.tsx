import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

function FooterComponent() {
  return (
    <Footer>
      <Container>
        <StyledLink
          href="https://github.com/Khaled-AlAsadi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile"
        >
          <FaGithub />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/khaled-al-asadi-a0a169193/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn profile"
        >
          <FaLinkedin />
        </StyledLink>
      </Container>
    </Footer>
  )
}

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: auto;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    align-items: center;
    gap: 0.5rem;
  }
`

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;

  &:hover {
    color: #e1e1e1;
    background-color: #444;
  }
`
export default FooterComponent
