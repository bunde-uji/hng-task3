import React, {useState} from "react";
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import x from '../assets/x.svg';
import metamask from '../assets/metamask.svg';
import wallet from '../assets/wallet.svg';
import chevron from '../assets/chevron.svg';
import Menu from "./Menu";


function Navbar() {
    const [modalActive, setModalActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function openModal() {
        setModalActive(true);
    } 

    function closeModal() {
        setModalActive(false);
    }

    function toggleMenu() {
        setMenuActive(!menuActive);
    }

    function handleScroll() {
        const scrollPosition = document.documentElement.scrollTop;

        if (scrollPosition > 50) {
            setScrolled(true);
        } else setScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);

    return (  
        <div className={`flex w-full justify-between items-center h-[13vh] px-5 md:px-20 font-['Red_Rose'] sticky top-0 left-0 bg-white ${scrolled ? 'border-b' : ''}`}>
            <Link to='/'><img src={logo} alt="" /></Link>

            <div className="hidden md:flex items-center">
                <Link to="/" className="mx-4 font-normal">Home</Link>
                <Link to="/place-to-stay" className="mx-4">Place to stay</Link>
                <Link to="/" className="mx-4">NFTs</Link>
                <Link to="/" className="mx-4">Community</Link>
            </div>

            <button className="bg-[#A02279] rounded-lg h-[43px] w-[140px] text-white cursor-pointer hidden md:flex items-center justify-center" onClick={openModal}>Connect wallet</button>

            <button className="cursor-pointer flex md:hidden" onClick={toggleMenu}>
            <i className={`fa-solid ${menuActive ? 'fa-x' : 'fa-bars-staggered'}`}></i>    
            </button> 

            {menuActive && <Menu onclick={openModal} menuActive={menuActive} setmenuActive={setMenuActive} />}

            {modalActive &&
            <>
                <div className="fixed top-0 left-0 w-screen h-screen bg-slate-500 opacity-40 z-10">
                    
                </div>

                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 z-30 w-[92%] sm:w-3/5 md:w-2/5 bg-white rounded-md overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-3 border-b">
                        <span className="text-[22px] font-bold">Connect Wallet</span>
                        <button className="cursor-pointer"><img src={x} alt="" onClick={closeModal} /></button>
                    </div>

                    <div className="p-5">
                        <p className="mb-3">Choose your preferred wallet:</p>
                        <div className="flex justify-between px-5 py-2 border rounded-md mb-3">
                            <div className="flex items-center">
                                <img src={metamask} alt="" className="mr-3" />
                                <span className="text-lg font-semibold">Metamask</span>
                            </div>
                            <img src={chevron} alt="" />
                        </div>
                        <div className="flex justify-between px-5 py-2 border rounded-md">
                            <div className="flex items-center">
                                <img src={wallet} alt="" className="mr-3" />
                                <span className="text-lg font-semibold">Metamask</span>
                            </div>
                            <img src={chevron} alt="" />
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
}

export default Navbar;