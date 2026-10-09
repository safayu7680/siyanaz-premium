export function maskPhone(phone:string,role:string){
  if(role==='owner') return phone
  return phone.slice(0,2)+'xxxx'+phone.slice(-3)
}