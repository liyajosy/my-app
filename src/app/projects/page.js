
import Image from 'next/image';
import accordion from '/public/accordion.png';
import Link from 'next/link';

export default function Projects(){
    return(
        <div className='bg-gradient-to-r from-blue-50 to-blue-200 min-h-screen text-center'>
            <div>
                <h1 className="font-bold p-10">Projects</h1>
            </div>
            <div className='flex'>
            <div className="w-1/4 p-1  p-1 m-2 bg-indigo-200 text-center rounded-md justify-item-center" >
                <h4 className='font-bold'>Accordion Panel</h4>
                <Link href="https://liyajosy.github.io/my-projects/" target="_blank" className=" pl-5"> 

                <Image
                src={accordion}
               width={250}
                height={250}
                className='pl-10 pb-10'
                alt="Accordion"
                />
                
                </Link>
               
            </div>
            </div>
           


        </div>
    )
}