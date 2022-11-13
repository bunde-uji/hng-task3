import React from 'react';
import {Link} from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import copyright from '../assets/copyright.png';


function Footer() {
    return (  
        <div className="bg-[#1D1D1E] font-['Red_Rose'] px-3 py-12 text-[#F7F7F7] flex flex-col md:flex-row">
            <div className='md:ml-20 mr-[11%] text-[14px] mb-8'>
                <img src={logo2} alt="" className='mb-7 md:mb-20' />
                <div className='flex md:mb-14 mb-3'>
                    <img src={facebook} alt="" className='mr-9 cursor-pointer ' />
                    <img src={instagram} alt="" className='mr-9 cursor-pointer ' />
                    <img src={twitter} alt="" className='mr-9 cursor-pointer ' />
                </div>

                {/* <img src={copyright} alt="" /> */}
                <p className='text-[#F7F7F7] flex items-center'><span className='mr-2 text-2xl'>&copy;</span> 2022 Metabnb</p>
            </div>

            <div className='flex flex-wrap flex-grow'>
                <div className='flex flex-col mr-7 md:mr-[18%] mb-6'>
                    <h4 className='mb-5 text-[18px] font-bold'>Community</h4>
                    <Link to='/' className='mb-3 text-[14px]'>NFT</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Tokens</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Landlords</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Discord</Link>
                </div>

                <div className='flex flex-col mr-7 md:mr-[18%] mb-6'>
                    <h4 className='mb-5 text-[18px] font-bold'>Places</h4>
                    <Link to='/' className='mb-3 text-[14px]'>Castle</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Farms</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Beach</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Learn more</Link>
                </div>

                <div className='flex flex-col mr-7 md:mr-[18%] mb-6'>
                    <h4 className='mb-5 text-[18px] font-bold'>About us</h4>
                    <Link to='/' className='mb-3 text-[14px]'>Roadmap</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Creators</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Career</Link>
                    <Link to='/' className='mb-3 text-[14px]'>Contact us</Link>
                </div>

            </div>
        
        </div>
    );
}

export default Footer;