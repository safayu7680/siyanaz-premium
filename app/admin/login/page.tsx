'use client'; import {useState} from 'react'
export default function Login(){
  const [u,setU]=useState(''); const [pin,setPin]=useState('')
  const login=()=>{ const role=u==='owner'?'owner':'admin'; localStorage.setItem('admin_session',JSON.stringify({username:u,role,expiry:Date.now()+7200000})); location.href='/admin' }
  return <div style={{padding:'40px'}}><h1>Login Owner vs 6 Admins</h1><p>owner/739281 full admin1-6/1234 masked</p><input value={u} onChange={e=>setU(e.target.value)} placeholder="owner or admin1"/><input value={pin} onChange={e=>setPin(e.target.value)} placeholder="PIN"/><button onClick={login}>Login</button></div>
}