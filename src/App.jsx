import ProductList from './components/ProductList';
import Button from './components/Button';
import {AppProvider,useApp} from './context/AppContext';

function Header(){
  const {theme,setTheme,state,dispatch} = useApp();
  return (
    <div>
      <h2>Theme: {theme}</h2>
      <Button onClick={()=>setTheme(theme==='light'?'dark':'light')}>Toggle Theme</Button>
      <p>Cart Count: {state.count}</p>
      <Button onClick={()=>dispatch({type:'remove'})}>Remove</Button>
    </div>
  );
}

export default function App(){
  return (
    <AppProvider>
      <Header />
      <ProductList />
    </AppProvider>
  );
}