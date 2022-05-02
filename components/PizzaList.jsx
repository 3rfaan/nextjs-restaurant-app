import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Pizza in Town!</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
        dignissimos eum. Consequatur totam enim, fuga modi sint doloremque sed
        ipsum.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
