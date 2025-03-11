import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

// Definição dos tipos esperados para as props
SongItem.propTypes = {
  image: PropTypes.string.isRequired, // `image` deve ser uma string obrigatória
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  artist: PropTypes.string, // Opcional
  audio: PropTypes.string, // Opcional
  _id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SongItem;
