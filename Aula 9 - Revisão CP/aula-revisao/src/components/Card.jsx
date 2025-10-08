export default function Card({name = "semnada", description = "semNada", stargazers_count}) {
  return (
    <div className="border-2 flex flex-wrap p-2">
       <h1>{name}</h1>
       <p>{description}</p>
       <span>{stargazers_count}</span>
    </div>
  )
}
