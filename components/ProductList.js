import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo pariatur
        molestias voluptatibus voluptates. Fuga quos eum at dolore eveniet
        dolores voluptatem, voluptatum eos debitis labore modi quod! Aperiam,
        similique quae.
      </p>
      <div className={styles.wrapper}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>



      </div>
    </div>
  );
};

export default ProductList;
