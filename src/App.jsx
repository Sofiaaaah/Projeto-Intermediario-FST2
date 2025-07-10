import React, { useState } from "react";
import './assets/css/style.css';
function App() {
    const [itens, setItens] = useState([]);
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const adicionar = () => {
        if (produto && quantidade) {
            setItens([...itens, { produto, quantidade }]);
            setProduto("");
            setQuantidade("");
        }
    };

    const remover = () => {
        setItens(itens.filter((_, final) => final != ""));
    };

    return (
        <div id="body">
            <div id="caixa">
                <h1>Lista de Compras</h1>

                <input
                    type="text"
                    id="produto"
                    placeholder="Produto"
                    value={produto}
                    onChange={sla => setProduto(sla.target.value)}
                />
                <input
                    id="quantidade"
                    type="number"
                    placeholder="Quantidade"
                    value={quantidade}
                    onChange={sla => setQuantidade(sla.target.value)}
                />
                <button onClick={adicionar} id="adicionar">Adicionar</button>

                <ul>
                    {itens.map((item) => (
                        <p>
                            {item.produto}  {item.quantidade}
                            <button onClick={() => remover()}>Remover</button>
                        </p>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default App;