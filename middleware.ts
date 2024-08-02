import { importJWK, jwtVerify } from 'jose';
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: any) {
 console.log('WORKING');
 
try { 
    const token = request.cookies.get('token').value
    const secertJWK ={
        kty: 'oct',
        k: process.env.JOSE_SECERT 
       }

      
   
    const secertKey = await importJWK(secertJWK,'HS256');
    const { payload } = await jwtVerify(token, secertKey)

    console.log('PAYLOAD:', payload);
    
    if(payload.id !== 'time' && payload.password !=='123456'){
        throw new Error('id invalid!')
    }

    //pass
    const requsetHeader = new Headers(request.headers)
    requsetHeader.set('user', JSON.stringify({id:payload.id}));
    const response = NextResponse.next({
        request: {
            headers: requsetHeader
        }
    })
return response
} catch (error) {
    console.log('ERR',error);
    
    return NextResponse.redirect(new URL('/',request.url))
}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/manage/blog/:path*',
}