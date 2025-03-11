import PropTypes from "prop-types";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray = [], path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Define quantos itens serão exibidos
  const finalItems = isHome ? items : itemsArray.length;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome && (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        )}
      </div>

      <div className="item-list__container">
        {Array.isArray(itemsArray) &&
          itemsArray
            .slice(0, finalItems)
            .map((currObj, index) => (
              <SingleItem
                {...currObj}
                idPath={idPath}
                key={`${title}-${index}`}
              />
            ))}
      </div>
    </div>
  );
};

// Adiciona validação de tipos para evitar erros no ESLint
ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  itemsArray: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  idPath: PropTypes.string.isRequired,
};

export default ItemList;
