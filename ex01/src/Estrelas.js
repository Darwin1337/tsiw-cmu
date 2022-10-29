export default function Estrelas() {
  return (
    <div>{ Array.from({ length: 2 }, () => Math.floor(Math.random() * 12) + 1).join(" ") }</div>
  )
}
