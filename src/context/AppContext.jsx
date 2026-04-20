import {createContext,useContext,useReducer,useState} from 'react';

const AppContext = createContext();

function reducer(state,action){
  switch(action.type){
    case 'add': return {count: state.count + 1};
    case 'remove': return {count: Math.max(0,state.count-1)};
    default: return state;
  }
}

export function AppProvider({children}){
  const [theme,setTheme] = useState('light');
  const [state,dispatch] = useReducer(reducer,{count:0});

  return (
    <AppContext.Provider value={{theme,setTheme,state,dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = ()=> useContext(AppContext);