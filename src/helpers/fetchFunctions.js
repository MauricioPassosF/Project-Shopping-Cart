export const fetchProduct = async (id) => {
  const BASE_URL = 'https://api.mercadolibre.com/items/';
  if (!id) {
    throw new Error('ID não informado');
  }
  try {
    const response = await fetch(`${BASE_URL}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchProductsList = async (product) => {
  const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';
  if (!product) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const response = await fetch(`${BASE_URL}${product}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return error.message;
  }
};
