import "./Boxs.css"

export default function Boxs({stats}) {

  return (
  <div className="stats-container">
{stats.map((item, index) => (
  <div key={index} className="porder-box d-flex flex-column justify-content-center align-items-center "
  >
    <span>{item.pre}</span>
    <h4>{item.title}</h4>
    <p>{item.subtitle}</p>
  </div>
))}
    
    </div>
  )
}
