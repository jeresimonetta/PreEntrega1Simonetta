import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = () => {
  return (
    <div>
      <h1>Bienvenidxs a SickInkPrints</h1>

      <div>
        <ProductCard
          precio={200}
          titulo={"Título 1"}
          descripcion={"Descripción 1"}
        />
        <ProductCard
          precio={300}
          titulo={"Título 2"}
          descripcion={"Descripción 2"}
        />
        <ProductCard
          precio={400}
          titulo={"Título 3"}
          descripcion={"Descripción 3"}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
