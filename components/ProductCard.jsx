import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width={200} height={200} />
      <h1 className={styles.title}>SMALL PIZZA</h1>
      <span className={styles.price}>$12.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa iure?
      </p>
    </div>
  );
};

export default ProductCard;
