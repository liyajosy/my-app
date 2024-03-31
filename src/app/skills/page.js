
'use client'
import Link from 'next/link';
import Image from 'next/image';
import html from '/public/html.png';
import coder from '/public/coder.png';
import dbImg from '/public/db.png';
import misc from '/public/misc.png';
import skills from '/public/skills.png';

export default function Skills(){
    return(
        <div className='bg-blue-100 min-h-screen'> 
          <div className="p-2">
            <h2 className='font-bold p-2'>
              About me
            </h2>
            <p className='pl-10  pr-20'>
              Hi, My name is Liya Josy. I am a highly motivated web developer with 4 years of experience in web design and development.
              I had the opportunity to be associated with Tata Elxsi for four years during which I provided technology solutions to our client which is a tier one provider of telecommunications and media in United States.
            </p>
            <br></br>
            <p className='pl-10  pr-20'>
              I like to build web apps using React and NextJs.
            </p>
          </div>
          <div className="p-2 ">
            <h2 className='font-bold'>
              Skills
            </h2>
           
            <div className='flex  flex-row m-2 '>
              <div className="w-1/4 p-1 m-2 bg-blue-50 text-center rounded-md ">
                <div className="justify-items-center pl-20 flex flex-row pb-2">
                
                <Image
                src={coder}
               width={40}
                height={40}
       
                alt="github"
                />
                <h4 className='font-bold'>Front end</h4>
                </div>
                
             
                
                <p className="p-1">HTML</p>
                <p className="p-1">CSS</p>
                <p className="p-1">JavaScript</p>
                <p className="p-1">React</p>
              </div>
              <div className="w-1/4 p-1  p-1 m-2 bg-blue-50 text-center rounded-md">
              <div className="justify-items-center pl-20 flex flex-row pb-2">
                
                <Image
                src={dbImg}
               width={40}
                height={40}
       
                alt="github"
                />
                <h4 className='font-bold'>Back end</h4>
                </div>
                <p className="p-1">Java</p>
                <p className="p-1">Python</p>
                <p className="p-1">Nodejs</p>
                <p className="p-1">MySQL</p>
                <p>MongoDB</p>
                
              </div>
              <div className="w-1/4 p-1  p-1 m-2 bg-blue-50 text-center rounded-md" >
              <div className="justify-items-center pl-20 flex flex-row pb-2">
                
                <Image
                src={misc}
               width={30}
                height={30}
       
                alt="github"
                />
                <h4 className='font-bold'>Others</h4>
                </div>
                <p className="p-1">NextJs</p>
                <p className="p-1">JSF</p>
                <p className="p-1">GIT & GitHub</p>
                <p className="p-1">Windows & Linux</p>
               
            
              </div>
             

            </div>
           

        
       </div>
       <div>
       <div className="p-2">
             <h2 className='font-bold p-2'>
              Certifications:
            </h2>
           <ul className='list-disc'>
              <li>
              1. Back end development Certification by freecodecamp
              </li>
              <li>
              2. Responsive web design by freecodecamp
              </li>
           </ul>
           
        </div>
       </div>
        </div>
    )
}
