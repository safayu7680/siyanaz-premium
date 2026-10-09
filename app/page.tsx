'use client'; import {useState} from 'react'
export default function Home(){
  const [phone,setPhone]=useState('')
  const goWA=()=>{ if(!/^07[0-9]{8}$/.test(phone)) return alert('07xxxxxxxx'); const msg=encodeURIComponent(`Hi Siyanaz Premium\nInquiry: Bridal Lehenga Qty1 Rs25000\nTotal Rs25000\nMy Contact: ${phone}`); window.open(`https://wa.me/947xxxxxxxx?text=${msg}`,'_blank') }
  return <div style={{padding:'20px'}}><h1>SIYANAZ PREMIUM - Videos New Launch</h1><p>Vertical swipe Shorts chips All New Launch Bridal Shalwars Tops Marawa Rs7000+</p><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="07xxxxxxxx"/><button onClick={goWA} style={{background:'#25D366',color:'#fff',padding:'10px',borderRadius:'8px',marginLeft:'8px'}}>Inquire via WhatsApp</button><p>Owner full Admin masked 07xxxx123</p><a href="/categories">Categories</a> | <a href="/cart">Cart</a> | <a href="/admin/login">Admin Login</a></div>
}