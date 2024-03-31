
import Image from 'next/image';
import accordion from '/public/accordion.png';
import Link from 'next/link';

export default function Projects(){
    return(
        <div className='bg-blue-100 min-h-screen p-10 '>
            <div>
                <h1 className="font-bold "> My Projects</h1>
            </div>
            <div className=' p-2 '>
                <Link href="https://github.com/liyajosy/my-app" target="_blank"  className='underline text-sky-900'>1. My portfolio App </Link>
                <p>Shows My projects and skills. This app is created using NextJs.</p>
                <p></p>
                </div>                
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/TimeStamp-microservice" target="_blank"  className='underline text-sky-900'>2.Timestamp-microservice</Link>
                <p>This microservice Shows Unix TimeStamp and UTC . (Done using Nodejs)</p>
                </div>
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/header-parser" target="_blank" className='underline text-sky-900' >3.Header Parser</Link>
                <p> This microservice shows user's system informations. (Done using Nodejs)</p>
                </div>
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/url-shortener" target="_blank" className='underline text-sky-900' >4.url-shortener</Link>
                <p>This microservice creates short links for your URL. (Done using Nodejs and MongoDB Atlas)</p>
                </div>
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/exercise-tracker" target="_blank" className='underline text-sky-900' >5.Exercise tracker</Link>
                <p>This app can create User and keep their exercise logs. (Done using Nodejs and MongoDB Atlas)</p>
                </div>
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/file-upload" target="_blank" className='underline text-sky-900'>6.File upload</Link>
                <p>This project help to upload files. (Done using Nodejs and multer)</p>
                </div>
                <div className='p-2'>
                <Link href="https://github.com/liyajosy/my-projects" target="_blank" className='underline text-sky-900'>7.Accordian Panel</Link>
                <p>Shows a simple accordion panel using react. (React project)</p>
                </div>           


        </div>
    )
}