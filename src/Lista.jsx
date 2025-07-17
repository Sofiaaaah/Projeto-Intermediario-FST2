import { useState, useEffect } from 'react'

import './assets/css/style.css'

const carregarItens = () => {
  return JSON.parse(localStorage.getItem('todo-itens')) || []
}

function App() {
  const [itens, setItens] = useState(() => carregarItens())
  const [produto, setProduto] = useState('')
  const [quantidade, setQuantidade] = useState('')

  const adicionarItem = () => {
    if (produto && quantidade > 0) {
      setItens([...itens, { produto, quantidade }])
      setProduto('')
      setQuantidade('')
    }
  }

  const removerItem = (index) => {
    setItens(itens.filter((_, final) => final != index))
  }

  const removerTodosItens = () => {
    setItens([])
  }

  const salvarItens = () => {
    localStorage.setItem('todo-itens', JSON.stringify(itens))
  }

  useEffect(salvarItens, [itens])

  return (
    <div id="caixa">
      <h1>📝 Vamos adicionar !</h1>

      <div id="navegador">
        <input
          type="text"
          id="input-produto"
          placeholder="Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
        <input
          id="input-quantidade"
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <button onClick={adicionarItem} id="btn-adicionar">
          Adicionar
        </button>
      </div>

      <div>
        <ul>
          {itens.map((item, index) => (
            <div className="resultado" key={index}>
              <input className="resultado-produto" value={item.produto} readOnly />
              <input className="resultado-quantidade" value={item.quantidade} readOnly />
              <button onClick={() => removerItem(index)} className="resultado-btn-remover">
                Remover
              </button>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <button id="resetar" onClick={() => removerTodosItens()}>
          resetar
        </button>
      </div>
    </div>
  )
}

export default App