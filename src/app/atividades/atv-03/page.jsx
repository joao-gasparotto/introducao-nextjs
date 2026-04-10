'use client'

import { useState } from "react";
import Link from "next/link";
import Botao from './botao';
import styles from './page.module.css';

export default function Atividade03 (){

const [acao, setAcao] = useState('');  


  function handleCadastrar () {
        setAcao('Cadastrar');
    }
       function handleEditar () {
        setAcao('editar');
    }
  function handleListar () {
        setAcao('Listar');
    }
       function handleExcluir  () {
        setAcao('Excluir');
    }
  function handleCancelar () {
        setAcao('Cancelar');
    }

return (
        <div className={styles.conteiner}>
            <h1>Atividade 3</h1>
            <h2>Acão selecionada é :  {acao}</h2>
            

          

            

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Cadastrar" aoClicar={handleCadastrar} acao={'Cadastrar'} />
            <Botao texto="Editar" aoClicar={handleEditar} acao={'Editar'} />
             <Botao texto="Listar" aoClicar={handleListar} acao={'Listar'} />
            <Botao texto="Excluir" aoClicar={handleExcluir} acao={'Excluir'} /> 
            <Botao texto="Cancelar" aoClicar={handleCancelar} acao={'Cancelar'} />
         </div>
    );


}



