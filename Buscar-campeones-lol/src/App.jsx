
import { useState, useEffect } from 'react';
import ListaCampeones from './components/ListaCampeones';
//import BuscarInvocador from './components/BuscarInvocador';

const App = () => {
  const [campeones, setCampeones] = useState([]);

  const buscarchampions = async () => {
    try {
      const response = await fetch(
        'https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json'
      );
      const data = await response.json();

      const championsData = Object.values(data.data);

      setCampeones(championsData);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  useEffect(() => {
    buscarchampions();
  }, []);
  return (
    <div>
      <header>Campeones de League of Legends</header>
      {/*<BuscarInvocador/>*/}
      <ListaCampeones campeones={campeones}/>
    </div>
  );
};

export default App;