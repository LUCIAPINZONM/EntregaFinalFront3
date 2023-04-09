import React from 'react';

const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className='card'>
      {/* En cada card deberan mostrar en name - username y el id */}

      <img
        src='images/doctor.jpg'
        alt={name}
        style={{ objectFit: 'cover', width: '200px' }}
      />
      
      <h3>{name}</h3>
      <h5>{username}</h5>
      <p>{id}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <a href={`/detail/${id}`}>Ver detalle</a>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className='favButton'>
        Add fav
      </button>
    </div>
  );
};

export default Card;
