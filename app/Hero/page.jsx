import React from 'react'
import Image from 'next/image'
import Link from "next/link";

const Hero = () => {
    return (
        <section className='h-screen '>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>Bienvenue chez Tech Innovate</h1>
                    <p className='text-gray-500 text-base  sm:text-lg lg:text-xl mb-6'> Découvrez l'avenir de la technologie avec notre Showcase. Nous sommes passionnés par
                        l'innovation et nous mettons en avant les dernières avancées dans divers domaines.
                    </p>
                    <div>
                    <Link href="/#footer" className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 border border-primary bg-primary p-3 text-white transition bg-blue-700 hover:border-blue-700 hover:bg-white hover:text-black '> Contact </Link>
                    </div>
                </div>

                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] mt-10'>
                        <Image
                            src="/images/img2.jpg"
                            alt="hero image"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero