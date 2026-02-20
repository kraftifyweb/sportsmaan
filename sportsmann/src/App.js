import './App.css';
import Header from './comp/header/Header.jsx';
import Top from './comp/top/Top.jsx';
import Nav from './comp/nav/Nav.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Top />
      <Header />
      <Nav />
    </div>
  );
}

export default App;