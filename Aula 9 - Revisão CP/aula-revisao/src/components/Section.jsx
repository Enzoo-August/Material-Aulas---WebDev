export default function Section({titulo = "Section1", children = "Teste1112"}) {
  return (
    <div className="flex flex-wrap gap-8 mb-3 flex-col">
        <h1>{titulo}</h1>
        <div className="flex gap-5">
          {children}
        </div>
        
    </div>
  )
}
