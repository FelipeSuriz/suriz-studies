import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.AppStyle}>
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
