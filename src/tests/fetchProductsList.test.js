import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async() => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
    
  it('retorno da função fetchProductsList com o argumento "computador" é o esperado', async () => {
    const data = await fetchProductsList('computador');
    expect(data).toEqual(computadorSearch);
  });

  // it('retorno de erro com a mensagem certa ao passar a funcao sem parametro', () => {
  //   expect(() => {fetchProductsList()}).toThrow(new Error('Termo de busca não informado'));
  // });
  
});
