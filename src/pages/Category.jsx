import { useEffect, useState } from 'react';
import { getFilteredCaterogy } from '../api';
import { useParams } from 'react-router-dom';
import { Preloader } from '../components/preloader';
import { MealList } from '../components/MealList';

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCaterogy(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}

export { Category };
