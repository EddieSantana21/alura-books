import './App.css';
import logo from './imagens/logo.svg'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='Logo'>
          <img src={logo} alt='logo da empresa'></img>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
