import React from 'react'; // importa o react para criar componentes
import ReactDOM from 'react-dom/client'; //importa o reactDom para renderizar o componente da página html
import App from './App';  // importa o componente app que possui toda logica do site
import GlobalStyle from './global'; // importa a estilização global do arquivo

const root = ReactDOM.createRoot(document.getElementById('root')); // cria o elemento root que vai renderizar o componente
root.render( // renderiza o componente
  <React.StrictMode > {/* ativa o modo estrito do react, que ajuda a identificar problemas potenciais na aplicação*/} 
    <GlobalStyle /> {/* aplica a estilização global */}
    <App /> {/* renderiza o componente App */}
  </React.StrictMode> 
);

