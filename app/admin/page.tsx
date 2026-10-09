'use client'; import {useEffect,useState} from 'react'
export default function Admin(){
  const [role,setRole]=useState('admin'); useEffect(()=>{ const s=JSON.parse(localStorage.getItem('admin_session')||'{}'); setRole(s.role||'admin') },[])
  return <div style={{padding:'20px'}}><h1>Dashboard Role {role}</h1>{role==='owner'?<div>Owner Full: Income Rs + Customers full 0712345678 + Enquiries full + WA Reply + Audit Logs + Settings add 6 admins</div>:<div>Admin Limited: Products counts Low stock counts Inquiries count only Phone 07xxxx123 masked NO Rs 403 for enquiries customers income</div>}</div>
}