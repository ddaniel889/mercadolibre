import axios from 'axios';


export  async  function Products() {
    try {
      const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326');
      console.log(response);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }


  export  async function getProduct({param}:any) {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?category_id=${param}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }


