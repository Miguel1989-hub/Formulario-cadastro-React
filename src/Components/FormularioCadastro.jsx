import react from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";

function FormularioCadastro({aoEnviar, validacaoCpf}) {
    const [nome, setNome] = useState("");
    const [sobreNome, setsobreNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [novidades, setNovidades] = useState("true");
    const [promocoes, setPromocoes] = useState("true");
    const [erros, setErros] = useState({cpf: {valido:true, texto:""}})

    return (
        <form
            onSubmit={function (event) {
                event.preventDefault();
                aoEnviar({nome, sobreNome, cpf, novidades, promocoes});
            }}

        >
            <TextField
                value={nome}
                onChange={function (event) {
                    setNome(event.target.value)
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={sobreNome}
                onChange={function (event) {
                    setsobreNome(event.target.value)
                }}

                id="sobreNome"
                label="SobreNome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={function (event) {
                    setCpf(event.target.value)
                }}
                onBlur={function(event){
                    const ehValido = validacaoCpf(cpf);
                    setErros({cpf: ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={<Switch defaultChecked value={novidades}
                    onChange={function (event) {
                        setNovidades(event.target.checked)
                    }} />} label="Novidades"
            />
            <FormControlLabel 
            control={<Switch defaultChecked value={promocoes}
            onChange={function (event) {
                setPromocoes(event.target.checked) }}/>} label="Promoções" 
            />
            <Button type="submit" variant="contained" color="primary" >Enviar</Button>
        </form>
    )
}

export default FormularioCadastro;