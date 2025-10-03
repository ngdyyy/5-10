let products = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 600 }
];

function getProductByID(id) {
  return products.find(products => products.id === id)
};
console.log("id 2", getProductByID(2));

function getTotalPrice() {
  return products.reduce((sum, products) => sum + products.price, 0 );
};
console.log("Tổng giá trị sản phẩm = ", getTotalPrice());

products.push = [{id: 4, name: "Headphone", price: 200}];
console.log(products);

function getHightPrice() {
  return products.filter(products => products.price > 700);
};
console.log("Sản phẩm có giá cao hơn 700 = ",getHightPrice());