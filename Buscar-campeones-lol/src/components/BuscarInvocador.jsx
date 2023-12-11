import { useState } from 'react';

const BuscarInvocador = () => {
  const [nombreInvocador, setNombreInvocador] = useState('');
  const [datosInvocador, setDatosInvocador] = useState(null);

  const Buscar = async () => {
    try {
      const response = await fetch(`https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombreInvocador}?api_key=`);
      const data = await response.json();

      // Actualizar el estado con los datos del invocador
      setDatosInvocador(data);
    } catch  (error) {
      console.error('Error al buscar invocador:', error);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Nombre del Invocador"
        value={nombreInvocador}
        onChange={(e) => setNombreInvocador(e.target.value)}
      />
      <button onClick={Buscar}>Buscar Invocador</button>

      {datosInvocador && (
        <div className="champion-section">
          <h2>Datos del Invocador:</h2>
          <p>Nombre: {datosInvocador.name}</p>
          <p>Nivel: {datosInvocador.summonerLevel}</p>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/${datosInvocador.profileIconId}.png`}
            alt="Icono del Perfil del Invocador"
          />
        </div>
      )}
    </>
  );
};

export default BuscarInvocador;
