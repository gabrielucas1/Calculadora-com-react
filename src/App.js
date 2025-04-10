import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./style";
import { useState } from 'react';

const App = () => {
  // Estados para armazenar os valores e a operação
  // [nome do estado, função para atualizar o estado]
  const [numeroAtual, setNumeroAtual] = useState('0'); // Número que o usuário está digitando
  const [primeiroNumero, setPrimeiroNumero] = useState('0'); // Primeiro número da operação
  const [operacao, setOperacao] = useState(''); // Operação selecionada (+, -, *, /)

  // Função para limpar os valores e resetar a calculadora
  const limpar = () => {
    setNumeroAtual('0'); // Reseta o número atual
    setPrimeiroNumero('0'); // Reseta o primeiro número
    setOperacao(''); // Reseta a operação
  }

  // Função para adicionar um número ao número atual
  const adicionarNumero = (numero) => {
    setNumeroAtual(prev => `${prev === '0' ? '' : prev}${numero}`);
    // Se o número atual for '0', substitui pelo novo número
    // Caso contrário, concatena o novo número ao número atual
  }

  // Função para somar números
  const somarNumeros = () => {
    if (primeiroNumero === '0') { // Se ainda não há um primeiro número...
      setPrimeiroNumero(numeroAtual); // Define o número atual como o primeiro número
      setNumeroAtual('0'); // Reseta o número atual para que o usuário digite o próximo número
      setOperacao('+'); // Define a operação como soma
    } else { // Se já há um primeiro número...
      const soma = Number(primeiroNumero) + Number(numeroAtual); // Soma os dois números
      setNumeroAtual(String(soma)); // Atualiza o número atual com o resultado da soma
      setOperacao(''); // Reseta a operação
    }
  }

  // Função para subtrair números
  const subtrairNumeros = () => {
    if (primeiroNumero === '0') { // Se ainda não há um primeiro número...
      setPrimeiroNumero(numeroAtual); // Define o número atual como o primeiro número
      setNumeroAtual('0'); // Reseta o número atual para que o usuário digite o próximo número
      setOperacao('-'); // Define a operação como subtração
    } else {
      const subtracao = Number(primeiroNumero) - Number(numeroAtual); // Subtrai os dois números
      setNumeroAtual(String(subtracao)); // Atualiza o número atual com o resultado da subtração
      setOperacao(''); // Reseta a operação
    }
  }

  // Função para multiplicar números
  const multiplicarNumeros = () => { 
    if (primeiroNumero === '0') { // Se ainda não há um primeiro número...
      setPrimeiroNumero(numeroAtual); // Define o número atual como o primeiro número
      setNumeroAtual('0'); // Reseta o número atual para que o usuário digite o próximo número
      setOperacao('*'); // Define a operação como multiplicação
    } else {
      const multiplicacao = Number(primeiroNumero) * Number(numeroAtual); // Multiplica os dois números
      setNumeroAtual(String(multiplicacao)); // Atualiza o número atual com o resultado da multiplicação
      setOperacao(''); // Reseta a operação
    }
  }

  // Função para dividir números
  const dividirNumeros = () => {
    if (primeiroNumero === '0') { // Se ainda não há um primeiro número...
      setPrimeiroNumero(numeroAtual); // Define o número atual como o primeiro número
      setNumeroAtual('0'); // Reseta o número atual para que o usuário digite o próximo número
      setOperacao('/'); // Define a operação como divisão
    } else {
      const divisao = Number(primeiroNumero) / Number(numeroAtual); // Divide os dois números
      setNumeroAtual(String(divisao)); // Atualiza o número atual com o resultado da divisão
      setOperacao(''); // Reseta a operação
    }
  }

  // Função para calcular o resultado com base na operação selecionada
  const calcularResultado = () => {
    if (primeiroNumero !== '0' && operacao !== '' && numeroAtual !== '0') {
      switch (operacao) {
        case '+':
          somarNumeros();
          break;
        case '-':
          subtrairNumeros();
          break;
        case '*':
          multiplicarNumeros();
          break;
        case '/':
          dividirNumeros();
          break;
        default:
          break;
      }
    }
  }

  // Estrutura do componente (interface da calculadora)
  return (
    <Container>
      <Content>
        <Input value={numeroAtual} /> {/* Exibe o número atual no display */}
        <Row>
          <Button label="." /> {/* Botão para ponto decimal */}
          <Button label="c" onClick={limpar} /> {/* Botão para limpar */}
          <Button label="/" onClick={dividirNumeros} /> {/* Botão para divisão */}
          <Button label="x" onClick={multiplicarNumeros} /> {/* Botão para multiplicação */}
        </Row>
        <Row>
          <Button label="7" onClick={() => adicionarNumero('7')} /> {/* Botão para o número 7 */}
          <Button label="8" onClick={() => adicionarNumero('8')} /> {/* Botão para o número 8 */}
          <Button label="9" onClick={() => adicionarNumero('9')} /> {/* Botão para o número 9 */}
          <Button label="+" onClick={somarNumeros} /> {/* Botão para soma */}
        </Row>
        <Row>
          <Button label="4" onClick={() => adicionarNumero('4')} /> {/* Botão para o número 4 */}
          <Button label="5" onClick={() => adicionarNumero('5')} /> {/* Botão para o número 5 */}
          <Button label="6" onClick={() => adicionarNumero('6')} /> {/* Botão para o número 6 */}
          <Button label="-" onClick={subtrairNumeros} /> {/* Botão para subtração */}
        </Row>
        <Row>
          <Button label="1" onClick={() => adicionarNumero('1')} /> {/* Botão para o número 1 */}
          <Button label="2" onClick={() => adicionarNumero('2')} /> {/* Botão para o número 2 */}
          <Button label="3" onClick={() => adicionarNumero('3')} /> {/* Botão para o número 3 */}
          <Button label="=" onClick={calcularResultado} /> {/* Botão para calcular o resultado */}
        </Row>
      </Content>
    </Container>
  );
}

export default App;