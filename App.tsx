import * as React from 'react';
import './style.css';
import Botao from './components/Botao';
import Formulario from './components/Formulario/formulario';

const App = () => {
  return (
    <div>
      <Formulario />
      <Botao />
    </div>
  );
};

export default App;
