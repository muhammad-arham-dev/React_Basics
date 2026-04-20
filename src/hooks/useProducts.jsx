import {useEffect,useState} from 'react';
import {fetchProducts} from '../services/api';
import {transformProducts} from '../utils/transform';

export default function useProducts(){
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');

  useEffect(()=>{
    let mounted = true;
    async function load(){
      try{
        const data = await fetchProducts();
        if(mounted) setItems(transformProducts(data));
      }catch(err){
        if(mounted) setError(err.message);
      }finally{
        if(mounted) setLoading(false);
      }
    }
    load();
    return ()=> mounted = false;
  },[]);

  return {items,loading,error};
}