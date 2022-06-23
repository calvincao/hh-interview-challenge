import Card from "../components/Card"
function DetailView ({ view, setView }) {
  return (
    <div>  
      <h1>{view}</h1>
      <Card size="large"/>
      <button onClick={()=>setView(null)}>Clear</button>
    </div>
  )
}

export default DetailView