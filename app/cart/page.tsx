'use client'; import {useState} from 'react'
export default function Cart(){
  const [p,setP]=useState(''); const wa=()=>{ if(!/^07[0-9]{8}$/.test(p)) return alert('07xxxxxxxx'); window.open(`https://wa.me/947xxxxxxxx?text=${encodeURIComponent('Hi inquiry '+p)}`,'_blank') }
  return <div style={{padding:'20px'}}><h1>Cart Inquiry Only NO Checkout</h1><p>Price from DB stock FOR UPDATE No address</p><input value={p} onChange={e=>setP(e.target.value)} placeholder="07xxxxxxxx"/><button onClick={wa} style={{background:'#25D366',color:'#fff',padding:'10px',borderRadius:'8px'}}>Inquire via WhatsApp</button></div>
}