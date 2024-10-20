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
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
    display: block;
  }
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
