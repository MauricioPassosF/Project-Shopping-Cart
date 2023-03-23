import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const loadingText = document.createElement('h2');
const products = document.querySelector('.products');

const loadingAdd = () => {
  loadingText.innerHTML = 'carregando...';
  loadingText.className = 'loading';
  products.appendChild(loadingText);
};

const loadingRemove = () => { loadingText.remove(); };

const getProducts = async (search) => {
  loadingAdd();
  const list = await fetchProductsList(search);
  loadingRemove();
  list.forEach((element) => { products.appendChild(createProductElement(element)); });
};
getProducts('computador');
