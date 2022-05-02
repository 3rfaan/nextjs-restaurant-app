import Image from "next/image";
import Link from "next/link";
Link;
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <a>
          <Image src={pizza.img} alt="" width={500} height={500} />
        </a>
      </Link>
      <Link href={`/product/${pizza._id}`}>
        <h1 className={styles.title}>{pizza.title}</h1>
      </Link>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
