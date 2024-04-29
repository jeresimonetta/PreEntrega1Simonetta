const ProductCard = (props) => {
  const { titulo, descripcion, precio } = props;
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{descripcion}</h3>
      <h3>{precio}</h3>
    </div>
  );
};

export default ProductCard;
