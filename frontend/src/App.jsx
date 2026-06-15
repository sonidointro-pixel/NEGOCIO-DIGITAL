import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('Cargando...')
  useEffect(()=>{
    fetch('/api/hello').then(r=>r.json()).then(d=>setMsg(d.message)).catch(()=>setMsg('No se pudo contactar el backend'))
  },[])
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>NEGOCIO DIGITAL</h1>
      <p>{msg}</p>
    </div>
  )
}
