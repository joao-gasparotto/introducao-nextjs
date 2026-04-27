'use client'

import { useState } from 'react';

import styles from './page.module.css';

export default function FormComponent() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [historico, setHistorico] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [modo, setModo] = useState('cadastro');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!login || !senha) {
            setMensagem('Preencha usuário e senha para continuar.');
            return;
        }

        if (modo === 'login') {
            const usuarioEncontrado = historico.find(
                (item) => item.login.toLowerCase() === login.toLowerCase() && item.senha === senha
            );

            if (usuarioEncontrado) {
                setMensagem(`Bem-vindo, ${login}! Acesso autorizado.`);
            } else {
                setMensagem('Usuário ou senha inválidos. Verifique seus dados ou cadastre-se.');
            }

            return;
        }

        const usuarioExistente = historico.find(
            (item, index) => item.login.toLowerCase() === login.toLowerCase() && index !== editIndex
        );

        if (usuarioExistente) {
            setMensagem('Este usuário já está cadastrado. Use outro nome ou faça login.');
            return;
        }

        const horario = new Date().toLocaleString();
        const novoRegistro = { login, senha, horario };

        if (editIndex >= 0) {
            const historicoAtualizado = historico.map((item, index) =>
                index === editIndex ? novoRegistro : item
            );
            setHistorico(historicoAtualizado);
            setMensagem('Cadastro atualizado com sucesso.');
        } else {
            setHistorico([...historico, novoRegistro]);
            setMensagem('Cadastro realizado com sucesso.');
        }

        setLogin('');
        setSenha('');
        setEditIndex(-1);
    };

    const handleEditar = (index) => {
        const item = historico[index];
        setLogin(item.login);
        setSenha(item.senha);
        setEditIndex(index);
        setModo('cadastro');
        setMensagem('Editando cadastro. Faça as alterações e clique em atualizar.');
    };

    const handleDeletar = (index) => {
        const novoHistorico = historico.filter((_, i) => i !== index);
        setHistorico(novoHistorico);
        if (editIndex === index) {
            setEditIndex(-1);
            setLogin('');
            setSenha('');
        }
        setMensagem('Cadastro removido com sucesso.');
    };

    const changeModo = (novoModo) => {
        setModo(novoModo);
        setEditIndex(-1);
        setLogin('');
        setSenha('');
        setMensagem('');
    };

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <button
                    type="button"
                    className={modo === 'cadastro' ? styles.active : ''}
                    onClick={() => changeModo('cadastro')}
                >
                    Cadastro
                </button>
                <button
                    type="button"
                    className={modo === 'login' ? styles.active : ''}
                    onClick={() => changeModo('login')}
                >
                    Login
                </button>
            </div>

            <h1>Acesso ao Sistema</h1>
            <p className={styles.subtitulo}>
                {modo === 'login'
                    ? 'Digite seu usuário e senha para entrar.'
                    : 'Cadastre um novo usuário para acessar o sistema.'}
            </p>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="login"
                    type="text"
                    placeholder="Usuário"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    name="senha"
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">
                    {modo === 'login' ? 'Entrar' : editIndex >= 0 ? 'Atualizar cadastro' : 'Cadastrar'}
                </button>
            </form>

            {mensagem && <div className={styles.mensagem}>{mensagem}</div>}

            <div className={styles.historico}>
                <h3>Cadastros realizados</h3>
                {historico.length === 0 ? (
                    <p>Nenhum usuário cadastrado ainda.</p>
                ) : (
                    historico.map((item, index) => (
                        <div key={index} className={styles.registro}>
                            <div className={styles.textoRegistro}>
                                <strong>{item.login}</strong>
                                <span>Senha: {item.senha}</span>
                                <small>{item.horario}</small>
                            </div>
                            <div className={styles.acoes}>
                                <button type="button" onClick={() => handleEditar(index)}>
                                    Editar
                                </button>
                                <button type="button" onClick={() => handleDeletar(index)}>
                                    Excluir
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
