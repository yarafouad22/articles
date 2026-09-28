import "./Hero.css"

export default function Hero({ pre,title ,subtitle ,children}) {
  return (
    
    <div className="grid-background hero  d-flex flex-column text-center w-100 h-auto align-items-center p-4 justify-content-center gap-3">
      <div className="rounded-pill bills">{pre}</div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {children}
    </div>
  )
}
