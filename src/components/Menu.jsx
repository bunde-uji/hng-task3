import React from 'react';
import {Link} from 'react-router-dom';


function Menu(props) {
    const menuActive = props.menuActive;

    return (  
        <div className={`w-3/4 fixed top-[13%] right-0 h-[87vh] bg-white flex md:hidden flex-col items-end border-l border-t`}>
            <button className="bg-[#A02279] rounded-lg h-[43px] w-[140px] text-white cursor-pointer my-5 mr-3" onClick={props.onclick}>Connect wallet</button>

            <div className="flex flex-col items-end w-full">
                <Link to="/" className="font-normal border-t border-b w-full text-right py-3 px-3">Home</Link>
                <Link to="/place-to-stay" className="w-full border-b py-3 text-right px-3">Place to stay</Link>
                <Link to="/" className="w-full border-b py-3 text-right px-3">NFTs</Link>
                <Link to="/" className="w-full border-b py-3 text-right px-3">Community</Link>
            </div>

        </div>
    );
}

export default Menu;