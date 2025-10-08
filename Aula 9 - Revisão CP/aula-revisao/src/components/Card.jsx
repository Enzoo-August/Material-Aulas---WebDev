export default function Card({name = "semnada", description = "semNada", stargazers_count}) {
  return (
    <div className="border-2 flex">
       <h1>{name}</h1>
       <p>{description}</p>
       <span>{stargazers_count}</span>
    </div>
  )
}
