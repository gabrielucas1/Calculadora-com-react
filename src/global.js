import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*, body {
    margin: 0;
    padding: 0;
}
`
// se trata da estilização global do projeto,
//  onde definimos o margin e padding como 0 para evitar que o navegador adicione margens ou preenchimentos padrão aos elementos.
//  Isso garante que a estilização comece do zero, permitindo um controle mais preciso sobre o layout e a aparência da aplicação. 
