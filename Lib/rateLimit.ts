const map=new Map()
export function rateLimit(k:string,l:number,w:number){
  const now=Date.now(); const e=map.get(k)
  if(e?.lockUntil&&now<e.lockUntil) return {allowed:false}
  if(!e||now>e.reset){ map.set(k,{count:1,reset:now+w,fails:0}); return {allowed:true} }
  e.count++; if(e.count>l){ e.fails++; if(e.fails>=5) e.lockUntil=now+15*60*1000; return {allowed:false} }
  return {allowed:true}
}