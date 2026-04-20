import {useMemo,useCallback,useState,Suspense,lazy} from 'react';
import useProducts from '../hooks/useProducts';
import Card from './Card';
import Loader from './Loader';
import {useApp} from '../context/AppContext';

const Stats = lazy(()=>import('../pages/HomePage'));

export default function ProductList(){
  const {items,loading,error} = useProducts();
  const {dispatch} = useApp();
  const [search,setSearch] = useState('');
  const [showLazy,setShowLazy] = useState(false);

  const filtered = useMemo(()=>{
    return items.filter(i => i.shortTitle.toLowerCase().includes(search.toLowerCase()));
  },[items,search]);

  const handleAdd = useCallback(()=>{
    dispatch({type:'add'});
  },[dispatch]);

  if(loading) return <Loader />;
  if(error) return <p>{error}</p>;

  return (
    <div>
      <input placeholder='search' value={search} onChange={e=>setSearch(e.target.value)} />
      {filtered.map(item => (
        <Card key={item.id} title={item.shortTitle} price={item.price} onAdd={handleAdd} />
      ))}
      <button onClick={()=>setShowLazy(true)}>Load Lazy Component</button>
      {showLazy && <Suspense fallback={<Loader />}><Stats /></Suspense>}
    </div>
  );
}