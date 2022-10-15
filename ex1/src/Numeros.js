export default function Numeros() { 
  return (
    <div>{ Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 1).join(" ") }</div>
  )
}
