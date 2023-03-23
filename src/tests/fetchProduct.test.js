import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('fetchProduct é uma função', () => {
   expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', async() => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });

  it('retorno da função fetchProduct com o argumento "MLB1405519561" é o esperado', async () => {
    expect( await fetchProduct('MLB1405519561')).toEqual(product);
  });

  it('retorno de erro com a mensagem certa ao passar a funcao sem parametro', async () => {
    await expect(fetchProduct()).rejects.toEqual(new Error('ID não informado'));
  });
});
