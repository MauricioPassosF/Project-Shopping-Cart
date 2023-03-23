import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const h2 = document.createElement('h2');
const products = document.querySelector('.products');

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
getProducts('computador');
// const resultado = await fetchProduct('MLB1405519561');
// const pegarId = await fetchProductsList('computador');
// console.log(pegarId);
// console.log(resultado);
