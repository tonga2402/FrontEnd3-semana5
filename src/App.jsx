import { useState , useEffect} from 'react'
import './App.css'

function App() {

  const [pedido, setPedido] = useState('')

  useEffect(()=>{

    setTimeout(() => {
    
      setPedido("su pedido se ingreso correctamente")
     
    }, "2000");
  },[])

  useEffect(()=>{
    console.log(' el componente se actualizo')
  })

  const handlerCancelar = ()=>{
    alert("pedido cancelado")
  }
  
  return (
    <>
      <h1>PromoPizza</h1>
      <div>{pedido}</div>
      <button onClick={handlerCancelar} style={{margin:"40px", background:"red"}}>cancelar pedido</button>
    </>
  );
}

export default App