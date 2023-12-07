

const ListaCampeones = ({ campeones }) => {
    return (
      <div className="container-padre">
        {campeones.map((camp, idx) => (
          <div key={idx} className="champion-container">
            <div className="champion-info">
              <h1 id="nombreCampeon">{camp.name}</h1>
              <img src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/${camp.image.full}`} alt={camp.name} />
              <div id="historia" className="champion-section">
                <h2>Historia</h2>
                <p>{camp.blurb}</p>
              </div>
  
              <div id="informacion" className="champion-section">
                <h2>Información</h2>
                <ul>
                  {Object.entries(camp.info).map(([key, value]) => (
                    <li key={`${idx}-${key}`}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </div>
  
              <div id="habilidades" className="champion-section">
                <h2>Habilidades</h2>
                <ul>
                  {Object.entries(camp.tags).map(([key, value]) => (
                    <li key={`${idx}-${key}`}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </div>
  
              <div id="estadistica" className="champion-section">
                <h2>Estadisticas</h2>
                <ul>
                  {Object.entries(camp.stats).map(([key, value]) => (
                    <li key={`${idx}-${key}`}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ListaCampeones;
  