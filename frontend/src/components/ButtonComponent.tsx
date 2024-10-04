import { ReactNode } from 'react'

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
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}
