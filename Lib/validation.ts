import {z} from 'zod'
export const phoneSchema=z.string().regex(/^07[0-9]{8}$/)
export const slugSchema=z.string().regex(/^[a-z0-9-]{3,50}$/).refine(s=>!/<script/i.test(s))
export const nameSchema=z.string().min(3).max(100).regex(/^[A-Za-z0-9 &()-]{3,100}$/).refine(s=>!/<script/i.test(s))
export const priceSchema=z.number().min(100).max(500000)
export const pinSchema=z.string().regex(/^[0-9]{4,6}$/)