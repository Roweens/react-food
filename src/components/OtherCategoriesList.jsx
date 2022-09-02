import { Link } from 'react-router-dom';

function OtherCategoriesList({ name }) {
  return (
    <li className="collection-item">
      <div>
        {name}
        <Link to={`/category/${name}`} className="secondary-content">
          <i className="material-icons arrow">send</i>
        </Link>
      </div>
    </li>
  );
}

export { OtherCategoriesList };
