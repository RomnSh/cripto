import React from 'react';
import { BsTrashFill } from "react-icons/bs";
const CardCurrency = (props) => {
   
     return ( 
        <div className='container text-center rounded px-2 py-5 mx-4 border h-60 bg-gradient-to-r to-emerald-50 from-blue-200 '>
            <div className='items-center'>
                <h4>{props.currens} - {'USD'}</h4>
                <img className='inline-block mx-2 my-3 opacity-60 w-24' src= {`https://www.cryptocompare.com${props.currensImg}?width=80` } alt='currensy'/>
                <img className='inline-block mx-2 my-3 opacity-60 w-24' src= {`https://img2.freepng.ru/20180131/vvw/kisspng-dollar-sign-united-states-dollar-symbol-gold-dollar-png-transparent-image-5a7276c1d0fcd7.844791431517450945856.jpg`}alt='currensy'/>
            </div>
            <div className='my-2'>
                <h1 className='font-bold inline-block'>-</h1>
            </div>
                <div>
                <button className='hover:text-red-600' onClick={() => props.remove(props.currens)}><span className='inline-block'><BsTrashFill/></span><span> Delete</span></button>
            </div>
        </div>
     );
}
 
export default CardCurrency;