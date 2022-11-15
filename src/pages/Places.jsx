import React from 'react';
import setting from '../assets/places/setting.svg';
import place1 from '../assets/places/place1.png';
import place2 from '../assets/places/place2.png';
import place3 from '../assets/places/place3.png';
import place4 from '../assets/places/place4.png';
import place5 from '../assets/places/place5.png';
import place6 from '../assets/places/place6.png';
import place7 from '../assets/places/place7.png';
import place8 from '../assets/places/place8.png';
import place9 from '../assets/places/place9.png';
import place10 from '../assets/places/place10.png';
import place11 from '../assets/places/place11.png';
import place12 from '../assets/places/place12.png';
import place13 from '../assets/places/place13.png';
import place14 from '../assets/places/place14.png';
import place15 from '../assets/places/place15.png';
import place16 from '../assets/places/place16.png';
import Card from '../components/Card';


function Places() {
    return (  
        <div className="p-5 md:py-10 md:px-12 font-['Red_Rose']">
            <div className='flex items-center flex-wrap w-[92%] my-8 mx-2'>
                <span className="text-base md:text-lg mr-3">Restaurant</span>
                <span className="text-base md:text-lg mr-3">Cottage</span>
                <span className="text-base md:text-lg mr-3">Castle</span>
                <span className="text-base md:text-lg mr-3">fantasy city</span>
                <span className="text-base md:text-lg mr-3">beach</span>
                <span className="text-base md:text-lg mr-3">Carbins</span>
                <span className="text-base md:text-lg mr-3">Off-Grid</span>
                <span className="text-base md:text-lg mr-6">Farm</span>

                <div className='flex border rounded-md px-3 py-2 cursor-pointer'>
                    <span className='mr-8'>Location</span>
                    <img src={setting} alt="" />
                </div>
            </div>

            <div className='flex justify-center w-full flex-wrap items-center mb-5'>
                <Card img={place1} />
                <Card img={place2} />
                <Card img={place3} />
                <Card img={place4} />
                <Card img={place5} />
                <Card img={place6} />
                <Card img={place7} />
                <Card img={place8} />
                <Card img={place9} />
                <Card img={place10} />
                <Card img={place11} />
                <Card img={place12} />
                <Card img={place13} />
                <Card img={place14} />
                <Card img={place15} />
                <Card img={place16} />
            </div>
        </div>
    );
}

export default Places;