import styled from 'styled-components'

interface Props {
  onChange: (Link: any) => void
  value: string
  placeholder: string
  type?: string
}

export const InputFieldComponent: React.FC<Props> = ({
  onChange,
  value,
  placeholder,
  type,
}) => {
  return (
    <StyledTextInput
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  )
}

const StyledTextInput = styled.input`
  padding: 1rem;
  border: 2px solid #ec4186;
  border-radius: 12px;
  width: 100%;
  max-width: 100%;
  font-size: 1.1rem;
  box-sizing: border-box;
`
