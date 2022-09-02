import { useParams, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getMealById } from '../api';
import { Preloader } from '../components/preloader';

function Recipe() {
  const [mealInfo, setMealInfo] = useState([]);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => {
      setMealInfo(data.meals[0]);
    });
  }, [id]);
  return (
    <React.Fragment>
      <button className="btn back-btn deep-purple lighten-2" onClick={goBack}>
        GO BACK
      </button>
      {!mealInfo.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={mealInfo.strMealThumb} alt={mealInfo.strMeal} />
          <h1>{mealInfo.strMeal}</h1>
          {mealInfo.strTags ? (
            <p className="secondary-content tags">Tags:{mealInfo.strTags}</p>
          ) : null}
          <h4>Category: {mealInfo.strCategory}</h4>
          {mealInfo.strArea ? <h4>Area: {mealInfo.strArea}</h4> : null}
          <hr />
          <p>{mealInfo.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(mealInfo).map((key) => {
                if (key.includes('Ingredient') && mealInfo[key]) {
                  return (
                    <tr key={key}>
                      <td>{mealInfo[key]}</td>
                      <td>{mealInfo[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {mealInfo.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${mealInfo.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
    </React.Fragment>
  );
}

export { Recipe };
