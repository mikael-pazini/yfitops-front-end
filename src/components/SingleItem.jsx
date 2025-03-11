import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon className="single-item__icon " icon={faCirclePlay} />
      </div>

      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>

        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

// Adiciona a validação de tipos para evitar erros no ESLint
SingleItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  banner: PropTypes.string, // Opcional
  artist: PropTypes.string, // Opcional, tem um fallback "Artista"
  idPath: PropTypes.string.isRequired,
};

export default SingleItem;
