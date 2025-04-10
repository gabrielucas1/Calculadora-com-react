import styled from "styled-components"; // importando a biblioteca styled-components para estilizar os componentes em JS

export const ButtonContainer = styled.button` /* ButtonContainer recebe styled.button, esse componente permite criar um botão em HTML */
    padding: 25px;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
    color: #ffffff;
    font-size: 24px;
    font-weight: 650;
    flex: 1;

    &:hover {
        background-color: rgb(128, 128, 128);
    }
`;
