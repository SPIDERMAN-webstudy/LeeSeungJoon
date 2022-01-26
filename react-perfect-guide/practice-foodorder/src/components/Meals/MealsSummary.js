import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>우리가 어떤 민족입니까</h2>
      <p>
        지친 일상에 행복을 더해주는 맛있는 음식들이 여러분의 진정한
        동반자입니다. 이제 클릭 한 번에 세상의 모든 음식을 집 앞으로 가져오세요.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
