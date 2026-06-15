import React, {useEffect, useState} from 'react'

export default function App(){
  const [msg, setMsg] = useState('Cargando...')
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
  
  useEffect(()=>{
    fetch(`${apiUrl}/api/hello`)
      .then(r=>r.json())
      .then(d=>setMsg(d.message))
      .catch(()=>setMsg('No se pudo contactar el backend'))
  },[])
  
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
      <h1>NEGOCIO DIGITAL</h1>
      <p>{msg}</p>
      <p style={{fontSize:'12px', color:'#666'}}>API: {apiUrl}</p>
    </div>
  )
}

