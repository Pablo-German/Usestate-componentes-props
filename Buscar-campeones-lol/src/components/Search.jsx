import { useState, useEffect } from 'react';

const Search = () => {
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
  const [texto,setTexto] = useState('');
const handletext = (e) =>{
    setTexto(e.target.value)
}


  return (
    <>
    <h3>{texto}</h3>
    <div className="search">
    <input className="buscador" type="text"  onChange={handletext}/>
    <button >Buscar</button>
    </div>
    
      {campeones.map((cam, idx) => (
        <div key={idx} className="info-champion">
            <h1>{cam.name}</h1>
          <img key={idx} src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${cam.image.full}`} alt={cam.name} />

        </div>
      ))}
    </>
  );
};

export default Search;



