import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const getProducts = async (search) => {
  const products = document.querySelector('.products');
  const list = await fetchProductsList(search);
  list.forEach((element) => { products.appendChild(createProductElement(element)); });
};
getProducts('computador');
// const products = await fetchProductsList('computer');
// createProductElement(products);
