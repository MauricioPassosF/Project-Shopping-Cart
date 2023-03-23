import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const h2 = document.createElement('h2');
const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

const addCartOnload = async () => {
  const prodInfos = await Promise.all(getSavedCartIDs().map((id) => (fetchProduct(id))));
  prodInfos
    .forEach((info) => cartProducts.appendChild(createCartProductElement(info)));
};
const addText = (text, addClass) => {
  h2.innerHTML = text;
  h2.className = addClass;
  products.appendChild(h2);
};

const loadingRemove = () => {
  const loadingText = document.querySelector('.loading');
  loadingText.remove();
};

const getProducts = async (search) => {
  addText('carregando...', 'loading');
  try {
    const list = await fetchProductsList(search);
    list.forEach((element) => { products.appendChild(createProductElement(element)); });
  } catch (error) {
    addText('Algum erro ocorreu, recarregue a página e tente novamente', 'error');
  } finally { loadingRemove(); }
};
addCartOnload();
getProducts('computador');
// const resultado = await fetchProduct('MLB1405519561');
// const pegarId = await fetchProductsList('computador');
// console.log(pegarId);
// console.log(resultado);
