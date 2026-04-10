import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === 'Cadastrar' ? styles.Cadastrar : acao === 'Editar' ? styles.Editar : acao === 'Listar' ? styles.Listar : acao === 'Excluir' ? styles.Excluir : acao === 'Cancelar' ? styles.Cancelar : ''    }`}
           
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;
