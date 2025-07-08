import Input from './components/Input'
import './assets/css/main.css';

function App() {
  return (
    <div id='caixa' className='font-bold text-center'>

      <h1 className='text-gray-500 font-bold'>Lista de Compras e Quantidades</h1>

      <div id="linha-inputs">
        <Input id="produto" type="text" placeholder="Nome Produto" />
        <Input id="quantidade" placeholder="Quantidade" type="number" />
        <button id="adicionar" className="bg-red-300 text-white">
        Adicionar
        </button>
      </div>
      

    </div>
  );
}

export default App;