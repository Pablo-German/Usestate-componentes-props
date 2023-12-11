import { useState } from "react";

const BuscarCampeon = () => {
  const [nombreCampeon, setNombreCampeon] = useState('');
  const [datosCampeon, setDatosCampeon] = useState(null);

  const buscarCampeon = async () => {
    try {
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json`);
      const data = await response.json();

      // Assuming that nombreCampeon is the champion name entered by the user
      const championData = data.data[nombreCampeon];

      // Actualizar el estado con los datos del campeon
      setDatosCampeon(championData);
    } catch  (error) {
      console.error('Error al buscar Campeon:', error);
    }
  };

  return (
    <>
    <div className="BuscarCampeon">
      <input
        type="text"
        placeholder="Nombre del Campeon"
        value={nombreCampeon}
        onChange={(e) => setNombreCampeon(e.target.value)}
      />
      <button onClick={buscarCampeon}>Buscar Campeon</button>
      </div>
      {datosCampeon && (
        <div className="champion-container">
            <div className="champion-info">
                <div className="champion-section">
          <h2>Datos del Campeon:</h2>
          <p>Nombre: {datosCampeon.name}</p>
          <img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${datosCampeon.image.full}`} alt={datosCampeon.name} />
          <h3>Rol</h3>
          <ul>
          {Object.entries(datosCampeon.tags).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          <h3>Informacion</h3>
          <ul>
            {Object.entries(datosCampeon.info).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          <h3>Estadistica</h3>
          <ul>
            {Object.entries(datosCampeon.stats).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuscarCampeon;

