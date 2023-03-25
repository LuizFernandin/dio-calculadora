import { InputContainer } from "./styles"

interface Props {
    value: string
}

function Input({value}: Props) {
    return (
        <InputContainer>
            <input type="text" disabled value={value} />
        </InputContainer>
    )
}

export default Input