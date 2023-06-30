export default function Product() {
  //   const products = [
  //     { id: 1, name: "Laptop", price: 500 },
  //     { id: 2, name: "Phone", price: 600 },
  //     { id: 3, name: "Computer", price: 700 },
  //   ];

  //array k có id
  const fruits = ["Apple", "Watermelon", "Lemon"];

  //   const productList = products.map((product) => (
  //     <h3 key={product.id}>
  //       {product.name}: ${product.price}
  //     </h3>
  //   ));

  //Rendering Array: sử dụng khi k có id
  const fruitsList = fruits.map((fruit, index) => (
    <h3 key={index}> {fruit} </h3>
  ));
  return <div> {fruitsList} </div>;
  //   <div>{productList}</div>;
}
