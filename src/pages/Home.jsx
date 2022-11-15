import React from 'react';
import hero from '../assets/home/hero.png'
import Card from '../components/Card';
import card1 from '../assets/home/card1.png';
import card2 from '../assets/home/card2.png';
import card3 from '../assets/home/card3.png';
import card4 from '../assets/home/card4.png';
import card5 from '../assets/home/card5.png';
import card6 from '../assets/home/card6.png';
import card7 from '../assets/home/card7.png';
import card8 from '../assets/home/card8.png';
import mb from '../assets/home/mb.svg';
import opensea from '../assets/home/opensea.png';
import os from '../assets/home/opensea.svg';
import metamask from '../assets/home/metamask.svg';
import nft from '../assets/home/nft.svg';


function Home() {
    return (  
        <div className="font-['Red_Rose']">
            <div className='flex flex-col md:flex-row items-center px-6 md:px-16 py-20'>
                <div className='flex-grow mr-0 md:mr-12 mb-10'>
                    <p className='text-[40px] md:text-[50px] font-bold mb-7'>Rent a <span className='text-[#A02279]'>Place</span> away from <span className='text-[#A02279]'>Home</span> in the <span className='text-[#A02279]'>Metaverse</span></p>

                    <p className='text-xl md:text-2xl mb-10'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

                    <div className='w-full sm:w-[90%] h-[54px]'>
                        <input type="text" placeholder='Search for location' className='h-full w-3/5 border rounded-tl-[8px] rounded-bl-[8px] text-[14px] p-4 outline-none' />
                        <button type='submit' className='bg-[#A02279] h-full w-2/5 rounded-tr-[8px] rounded-br-[8px] text-white'>Search</button>
                    </div>
                </div>

                <img src={hero} alt="" />
            </div>

            <div className='h-[50px] md:h-[70px] bg-[#A02279] flex justify-between w-full px-2 md:px-16'>
                <img src={mb} alt="" className='w-[30%] md:w-[20%] lg:w-[17%]' />
                <img src={metamask} alt="" className='w-[30%] md:w-[20%] lg:w-[17%]' />
                <img src={os} alt="" className='w-[30%] md:w-[20%] lg:w-[17%]' />
            </div>

            <div className='flex flex-col items-center py-10 px-5 md:px-16'>
                <h2 className='text-3xl sm:text-4xl font-bold mb-6'>Inspiration for your next adventure</h2>
                <div className='flex flex-wrap justify-between mb-10'>
                    <Card img={card1} />
                    <Card img={card2} />
                    <Card img={card3} />
                    <Card img={card4} />
                    <Card img={card5} />
                    <Card img={card6} />
                    <Card img={card7} />
                    <Card img={card8} />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-between text-white bg-[#A02279] py-16 px-6 sm:px-12'>
                <div className='w-full sm:w-[38%] mb-9'>
                    <h2 className='text-4xl font-bold mb-6'>Metabnb NFTs</h2>

                    <p className='mb-8 text-lg'>Discover our gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs give our customers access to loads of our exclusive services.</p>

                    <button className='bg-white text-[#A02279] px-7 py-2 rounded-lg'>Learn more</button>
                </div>

                <img src={nft} alt="" className='w-full sm:w-[55%]' />
            </div>
        </div>
    );
}

export default Home;