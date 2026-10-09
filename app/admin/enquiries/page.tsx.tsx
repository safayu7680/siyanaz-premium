'use client'; import {useEffect,useState} from 'react'
export default function Enq(){
  const [role,setRole]=useState('admin'); useEffect(()=>{ const s=JSON.parse(localStorage.getItem('admin_session')||'{}'); setRole(s.role); if(s.role!=='owner'){ alert('403 Owner only'); location.href='/admin' } },[])
  return <div style={{padding:'20px'}}>{role==='owner'?<div>Enquiries Owner Only Full Phone 0712345678 Products JSON Total Rs WA Reply wa.me/94</div>:<div>403 Owner only</div>}</div>
}