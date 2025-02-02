const Product = ({ image, title }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default Product;
