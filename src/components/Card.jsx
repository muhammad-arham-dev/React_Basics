import React from 'react';
export default React.memo(function Card({title,price,onAdd}){
  console.log('Card render:', title);
  return (
    <div style={{border:'1px solid #ccc',padding:12,marginBottom:8}}>
      <h4>{title}</h4>
      <p>${price}</p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
});