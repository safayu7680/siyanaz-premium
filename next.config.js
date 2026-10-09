const nextConfig = {
  images: { remotePatterns: [{protocol:'https', hostname:'**.supabase.co'}] },
  async headers(){ return [{source:'/(.*)', headers:[
    {key:'X-Frame-Options', value:'DENY'},
    {key:'X-Content-Type-Options', value:'nosniff'},
    {key:'Referrer-Policy', value:'strict-origin-when-cross-origin'},
    {key:'Strict-Transport-Security', value:'max-age=63072000; includeSubDomains; preload'},
    {key:'Content-Security-Policy', value:"default-src 'self'; script-src 'self' 'unsafe-inline' https://*.supabase.co https://www.youtube.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data: blob:; media-src 'self' https: https://*.supabase.co; connect-src 'self' https://*.supabase.co; frame-src https://www.youtube.com; object-src 'none'; base-uri 'self';"},
  ]}] }
}
module.exports = nextConfig