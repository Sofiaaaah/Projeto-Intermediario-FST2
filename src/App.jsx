import React, { useState } from "react";
import './assets/css/style.css';
function App() {
    const [itens, setItens] = useState([]);
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const adicionar = () => {
        if (produto && quantidade > 0) {
            setItens([...itens, { produto, quantidade }]);
            setProduto("");
            setQuantidade("");
        }
    };

    const remover = (vazio) => {
        setItens(itens.filter((_, final) => final != vazio));
    };

    return (
        <div id="body">
            <div id="caixa">
                <div id="navegador">

                    <h1>🐥Lista de Ajuda🐥</h1>

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
                </div>


                <ul>
                    {itens.map((item, vazio) => (
                        <p id="resultado">
                            <div id="Rproduto">
                               {item.produto}   
                            </div>  
                            <div id="Rquantidade">
                               {item.quantidade}   
                            </div>
                         
                             
                            <button onClick={() => remover(vazio)} id="remover">Remover</button>
                        </p>
                    ))}
                </ul>
                <button id="resetar" onClick={()=>setItens([])}>resetar</button>
            </div>
        </div>

    );
}

export default App;