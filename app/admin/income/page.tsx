'use client'; import {useEffect,useState} from 'react'
export default function Income(){
  const [role,setRole]=useState('admin'); useEffect(()=>{ const s=JSON.parse(localStorage.getItem('admin_session')||'{}'); setRole(s.role); if(s.role!=='owner') location.href='/admin' },[])
  return <div style={{padding:'20px'}}>Income Owner Only Rs Inquiry Value AreaChart PieChart</div>
}