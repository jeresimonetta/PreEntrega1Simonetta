import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h1>SickInkPrints</h1>

      <ProductCard />

      <div>
        <h3>Título 2</h3>
        <h4>Descrición 2</h4>
        <h4>Precio 2</h4>
      </div>

      <div>
        <h3>Título 3</h3>
        <h4>Descrición 3</h4>
        <h4>Precio 3</h4>
      </div>
    </div>
  );
};

export default ItemListContainer;
