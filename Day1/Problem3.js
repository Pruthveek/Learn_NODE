const product=[{name:"light",price:299,inStock:true},
{name:"penbox",price:99,inStock:true},
{name:"lunchbox",price:399,inStock:false}]

console.log(product);

const availableProduct=product.filter(avlProduct=>avlProduct.inStock);
console.log(availableProduct);

product.push({name:"shool bag",price:599,inStock:true})

console.log(product);