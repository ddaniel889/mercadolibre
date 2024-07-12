
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css'

const Home : React.FC= ()  => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326')
        .then(response => {
          setData(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
    

    return (
      <> 
      <div className='h-1.5 border-dotted dashed pb-2'>
      <p className='text-align: center;font-bold'>Miguelibre</p>
      </div>
      <div className='flex'>
      {data.map(item  => (
        <div className='card' key={item.id}>
          <img src={item.thumbnail} alt="" />  
          <p>{item.title}</p>
          <p>{item.price} <span>$</span></p> 
        </div>
      ))}
    </div>
      </>
    )

}

export default Home;