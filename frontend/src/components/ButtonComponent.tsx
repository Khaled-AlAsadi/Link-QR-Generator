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
  background-color: #ec4186;
  color: #fff;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  &:hover {
    background-color: #ee544a;
`
