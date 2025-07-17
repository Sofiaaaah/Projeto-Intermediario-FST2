import { useState, useEffect } from 'react';
import './assets/css/style.css';

const carregarItens = () => {
  return JSON.parse(localStorage.getItem('todo-itens')) || [];
};

function Lista() {
  const [itens, setItens] = useState(() => carregarItens());
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [mensagem, setMensagem] = useState(''); // estado para mensagem

  const adicionarItem = () => {
    // valida produto e quantidade > 0
    if (produto && quantidade > 0) {
      const novoItem = { produto, quantidade };
      setItens([...itens, novoItem]);
      setProduto('');
      setQuantidade('');

      setMensagem('Produto adicionado com sucesso!');
      setTimeout(() => setMensagem(''), 1000);
    }
  };

  const removerItem = (index) => {
    setItens(itens.filter((_, i) => i !== index));
  };

  const removerTodosItens = () => {
    setItens([]);
  };

  useEffect(() => {
    localStorage.setItem('todo-itens', JSON.stringify(itens));
  }, [itens]);

  return (
    <div id="caixa">
      <h1>🥕 O que não pode faltar Hoje?</h1>
      <div id="navegador">
        <input
          type="text"
          id="produto"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          id="quantidade"
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button onClick={adicionarItem} id="adicionar">
          Adicionar
        </button>
      </div>

      {/* MENSAGEM DE PROD ADICIONADO*/}
      {mensagem && (
        <p id="mensagem-prod">
          {mensagem}
        </p>
      )}

      <div>
        <ul>
          {itens.map((item, index) => (
            <div className="resultado" key={index}>
              <input
                className="resultado-produto"
                value={item.produto}
                readOnly
              />
              <input
                className="resultado-quantidade"
                value={item.quantidade}
                readOnly
              />
              <button
                onClick={() => removerItem(index)}
                className="resultado-btn-remover"
              >
                Remover
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <button id="resetar" onClick={removerTodosItens}>
          🔄 Resetar
        </button>
      </div>
    </div>
  );
}

export default Lista;