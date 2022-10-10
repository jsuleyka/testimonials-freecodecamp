import './App.css';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
