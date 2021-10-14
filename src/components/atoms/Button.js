import { Button as ButtonStyled } from "../styles";

export default function Button({onSubmit}) {
    return (
        <ButtonStyled onClick={onSubmit}>Enviar</ButtonStyled>
    )
}
