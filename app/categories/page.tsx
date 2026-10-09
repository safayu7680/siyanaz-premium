export default function Categories(){
  const cols=['Bridal & Party Wear','Shalwars & Daily Wear','Tops & Sets','Marawa Packing Rs.7000+']
  return <div style={{padding:'20px'}}><h1>Categories 4 Collections</h1>{cols.map(c=><a key={c} href={`/collection/${encodeURIComponent(c)}`} style={{border:'1px solid #ddd',padding:'16px',borderRadius:'12px',display:'block',marginTop:'10px'}}>{c}</a>)}</div>
}