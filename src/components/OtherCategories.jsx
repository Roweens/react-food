import { getAllCategories } from '../api';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OtherCategoriesList } from './OtherCategoriesList';
import { Preloader } from './preloader';

function OtherCategories() {
  const [categories, setCategories] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getAllCategories().then((data) => {
      const filteredCategory = data.categories.filter(
        (cat) => cat.strCategory !== name
      );
      setCategories(filteredCategory);
    });
  }, [name]);

  return (
    <React.Fragment>
      {!categories.length ? (
        <Preloader />
      ) : (
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Other categories</h4>
            <p>Current category: {name}</p>
          </li>
          {categories.map((category) => (
            <OtherCategoriesList
              key={category.idCategory}
              name={category.strCategory}
            />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export { OtherCategories };
