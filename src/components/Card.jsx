import React from 'react';
import star from '../assets/star.png';


function Card(props) {
    return (  
        <div className='h-[372px] w-[292px] border border-[#D7D7D7] rounded-2xl p-3 text-[12px] my-5 mx-[14px]'>
            <img src={props.img} alt="" className='mb-2' />
            <div className="flex justify-between mb-2">
                <span>Desert king</span>
                <span className='font-bold'>1MBT per night</span>
            </div>  
            <div className="flex justify-between mb-2">
                <span>2345km away</span>
                <span>Available for 2weeks stay</span>
            </div>
            <div className="flex">
                <img src={star} alt="" className='mr-2' />
                <img src={star} alt="" className='mr-2' />
                <img src={star} alt="" className='mr-2' />
                <img src={star} alt="" className='mr-2' />
                <img src={star} alt="" className='mr-2' />
            </div>
        </div>
    );
}

export default Card;