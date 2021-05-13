import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import NavBar from './components/NavBar'
import ClientsList from './components/ClientsList'
function App() {
  return (
    <div className="App">
    <section className="NavBar">
          <NavBar />
      </section>
      <section className="clientList">
          <ClientsList />
      </section>
      <header className="App-header">
      </header>
      
    </div>
  );
}

export default App;
