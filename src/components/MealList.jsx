import { Meal } from './Meal';
import { useHistory } from 'react-router-dom';
import { OtherCategories } from '../components/OtherCategories';
function MealList({ meals }) {
  const { goBack } = useHistory();
  return (
    <div className="list">
      <button className="btn back-btn deep-purple lighten-2" onClick={goBack}>
        GO BACK
      </button>
      <div className="burger secondary-content">
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
      <OtherCategories />
    </div>
  );
}

export { MealList };
