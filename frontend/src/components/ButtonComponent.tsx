import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  onClick: (event: any) => void
  type?: 'submit' | 'reset' | undefined
}

export const ButtonComponent: React.FC<Props> = ({
  children,
  onClick,
  type,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: #EC4186;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 10px 20px;
  padding: 1rem 2rem;
  cursor: pointer;
  width:100%;
  font-size: 1.1rem;
  &:hover {
    background-color: #ee544a;
`
