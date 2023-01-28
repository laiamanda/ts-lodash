// import _ from 'lodash';

// // declare var GLOBAL: any;
// // console.log(GLOBAL);

// console.log(_.shuffle([1,2,3]));
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from 'class-validator';
import { Product } from './product';

const products = [
    {title: 'A carpet', price: 29.99},
    {title:'A book', price: 30.99}
];

const newProd = new Product('', -5.99);
validate(newProd).then(error => {
    if(error.length > 0){
        console.log('Validation Error');
        console.log(error);
    } else {
        console.log(newProd.getInfo());
    }    
});


// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for(const prod of loadedProducts) {
    console.log(prod.getInfo());
}

const p1 = new Product('A book', 12.99);
console.log(p1.getInfo());
