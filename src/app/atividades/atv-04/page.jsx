'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function FormComponent() {
    const [produto, setproduto] = useState('');
    const [qtd, setqtd] = useState('');
    const [historico, setHistorico] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (produto && qtd) {
            const horario = new Date();
            const novaEntrada = `qtd: ${qtd} - produto: ${produto} - Horário ${horario.toLocaleString()}`;

            setHistorico([...historico, novaEntrada]);
            
            // Opcional: Limpar os campos após adicionar
            setproduto('');
            setqtd('');
        }
    };

    const handleDeletar = (indexParaRemover) => {
        const novoHistorico = historico.filter((_, index) => index !== indexParaRemover);
        setHistorico(novoHistorico);
    };

    return (
        <div className={styles.container}>
            <h1>Atividade 4 - Compras</h1>
            <h2>Compras</h2>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="produto"
                    type="text"
                    placeholder='Produto'
                    value={produto} // Controlled component
                    onChange={e => setproduto(e.target.value)}
                />
                <input
                    name="quantidade"
                    type="number"
                    placeholder='Quantidade'
                    value={qtd} // Controlled component
                    onChange={e => setqtd(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>

            <div className={styles.historico}>
                <h3>Histórico de Compras</h3>
                
                {historico.length === 0 ? <p>Nenhuma compra registrada.</p> : 
                    historico.map((item, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
                            <span>{item}</span>
                            <button onClick={() => handleDeletar(index)}>Deletar</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}