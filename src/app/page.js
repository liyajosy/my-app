
'use client';
//import { Inter } from "next/font/google";
//import "./globals.css";
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import gitPic from '/public/github.png';
import linkedInPic from '/public/link.png';
import coder from '/public/coder.png';

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="p-2 min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 flex">
      <div className="p-20  ">
      <p className="text-2xl pt-20 pb-2 font-bold">Hi , I'm LIYA JOSY </p>
          
      <p className="p-1 text-xl ">Highly motivated Web Developer having experience in developing web applications using HTML, CSS, JavaScript and Reactjs.</p>
      <div  className="flex">           
         <Link href="https://www.linkedin.com/in/liyajosy/" target="_blank" className="pl-20">
            <Image
        src={linkedInPic}
        width={40}
        height={40}
       
        alt="github"
      />
      </Link>
         <Link href="https://github.com/liyajosy" target="_blank" className="underline pl-5"> 
         <Image
        src={gitPic}
        width={40}
        height={40}
       
        alt="github"
      />
         </Link>
        </div>
       
      </div>
    
      <div>
        <Image
        src={coder}
        width={800}
        height={800}
       
        alt="github"
      />
        </div>
  </div>
  );
}
