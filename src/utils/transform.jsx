  export function transformProducts(items){
    return items
      .filter(item => item.price > 20)
      .map(item => ({ ...item, shortTitle: item.title.slice(0,30) }));
  }