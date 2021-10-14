import Form from "../molecules/Form";
import { ContainerFormStyle } from "../styles";
import Menu from "./Menu";


export default function ContainerForm() {
    return (
        <ContainerFormStyle> 
            <Menu/>
            <Form/>
        </ContainerFormStyle>
    )
}
