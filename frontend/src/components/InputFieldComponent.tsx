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
  width: 100%;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  padding: 8px;
`
