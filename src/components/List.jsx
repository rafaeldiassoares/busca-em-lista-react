
import React, { useState } from "react";

import produtos from '../data/produtos';

const List = props => {
    const [inputPesquisa, setInputPesquisa] = useState('');

    const filteredValues = produtos.filter((produto) => {
        return (
            produto.nome.toLowerCase().includes(inputPesquisa.toLowerCase())
        );
    });

    const list = filteredValues.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>
                    R$ {produto.preco.toFixed(2).replace('.', ',')}
                </td>
            </tr>
        );
    })

    return (
        <div className="TabelaProdutos">
            <div>
                <h1>Lista de Produtos</h1>
                <input
                    type="text"
                    placeholder="Pesquisar"
                    onChange={e => setInputPesquisa(e.target.value)}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;