import styled from 'styled-components'

function HeaderComponent() {
  return (
    <NavbarContainer>
      <Header>
        <StyledTitle>Link QR Generator</StyledTitle>
      </Header>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    display: block;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
  }
`

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
`

export default HeaderComponent
