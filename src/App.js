import { Fragment } from 'react';
import FormularioCadastro from './Components/FormularioCadastro';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';
import { textAlign } from '@mui/system';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario} validacaoCpf={validarCPF}/>
    </Container>
  );
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validarCPF (cpf) {
  if(cpf.length !== 11 || isNaN(cpf)) {
    return {valido: false, texto: "Cpf deve ter 11 digitos"}
  }else{
    return {valido: true, texto: ""}
  }
}


export default App;
