import { useState, useEffect } from "react";
import './assets/css/style.css';

function App() {
    const [itens, setItens] = useState([]);
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");

    Storage.prototype.setObj = (key, obj) => {
        return this.setItem(key, JSON.stringify(obj))
    }

    Storage.prototype.getObj = (key) => {
        return JSON.parse(this.getItem(key))
    }

    const adicionar = () => {
        if (produto && quantidade > 0) {
            setItens([...itens, { produto, quantidade }]);
            setProduto("");
            setQuantidade("");
            localStorage.setObj("todo-itens", itens);
        }
    };

    const remover = (vazio) => {
        setItens(itens.filter((_, final) => final != vazio));
        localStorage.setObj("todo-itens", itens.values);
    };

    const removerTodos = () => {
        setItens([]);
        localStorage.removeItem("todo-itens");
    };

    useEffect(() => {
        setItens(localStorage.getObj("todo-itens"))
    }, [itens]);

    return (
        <div id="caixa">
            <div id="navegador">
                <h1>📝 Vamos adicionar !</h1>

                <input
                    type="text"
                    id="produto"
                    placeholder="Produto"
                    value={produto}
                    onChange={e => setProduto(e.target.value)}
                />
                <input
                    id="quantidade"
                    type="number"
                    placeholder="Quantidade"
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                />
                <button onClick={adicionar} id="adicionar">Adicionar</button>
            </div>

            <div>
                <ul>
                    {itens.map((item, index) => (
                        <p class="resultado" key={index}>
                            <div class="Rproduto">{item.produto}</div>
                            <div class="Rquantidade">{item.quantidade}</div>
                            <button onClick={() => remover(index)} class="remover">Remover</button>
                        </p>
                    ))}
                </ul>
            </div>

            <div>
                <button id="resetar" onClick={() => removerTodos()}>resetar</button>
            </div>
        </div>

    );
}

export default App;