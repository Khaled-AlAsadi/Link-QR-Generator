import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  onClick: (event: any) => void
  backgroundColor?: string
}

export const ButtonComponent: React.FC<Props> = ({
  children,
  onClick,
  backgroundColor,
}) => {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || '#ec4186'};
  color: #ffffff;
  border-radius: 0.25em;
  padding: 1em 2em;
  cursor: pointer;
  width: 100%;
  margin: 0.5rem 0 0 0;
  box-sizing: border-box;

  &:hover {
    background-color: #c20f5c;
  }
`
