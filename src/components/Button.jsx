export default function Button({children,...props}){
  return <button style={{padding:8,margin:4}} {...props}>{children}</button>;
}