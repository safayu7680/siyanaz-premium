export type Role='owner'|'admin'
export const canViewPhone=(r:Role)=>r==='owner'
export const canViewEnquiries=(r:Role)=>r==='owner'
export const blockedForAdmin=['/admin/customers','/admin/enquiries','/admin/income','/admin/audit-logs','/admin/settings']