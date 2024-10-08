import React, { ReactNode } from 'react'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'
import styled from 'styled-components'

interface IProps {
  open: boolean
  title: string
  children: ReactNode
  onToggle: () => void
}

const Collapsible: React.FC<IProps> = ({ open, children, title, onToggle }) => {
  return (
    <StyledCard>
      <Header onClick={onToggle}>
        <Title>{title}</Title>
        <ToggleButton>{!open ? <SlArrowDown /> : <SlArrowUp />}</ToggleButton>
      </Header>
      {open && <Content>{children}</Content>}
    </StyledCard>
  )
}
const StyledCard = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: max-height 0.3s ease;
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`

const Title = styled.h6`
  font-weight: bold;
  margin: 0;
`

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`

const Content = styled.div`
  padding: 1rem;
  background-color: #ffffff;
`
export default Collapsible
