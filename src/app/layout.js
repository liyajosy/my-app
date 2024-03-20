
'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from "next/image";

import "./globals.css";


export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        
      <main className="flex min-h-screen">     
        
        <div className="flex  flex-col  bg-indigo-400 md:flex-row w-1/6  p-10">
    
    <div className="flex flex-col  rounded-lg   md:px-3">
    <div className='flex'>
    
     <div>
     <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal pb-5 pt-10`}>
       <strong className="text-center">Liya Josy</strong>
     </p>
     </div>        
    </div>
     <Link
       href="/"
       className={clsx("flex items-center hover:bg-blue-400 md:text-base", {'bg-sky-200': pathname === '/'})}
     >
      Home  
     </Link>
     <Link href ="/skills"  className= {clsx("flex items-center hover:bg-blue-400 md:text-base ", {'bg-sky-200' :pathname ==='/skills'})}>
     About me
     </Link>
     <Link href ="/projects"  className= {clsx("flex items-center hover:bg-blue-400 md:text-base ", {'bg-sky-200' :pathname ==='/projects'})}>
       Projects
     </Link>
    </div>
    
    </div>
    
    <div className="w-5/6">{children}</div>
    </main>
     </body>
    </html>
  );
}
