import React from 'react';
import { BsTrashFill } from "react-icons/bs";
import {useCourseFetching} from '../hooks/СourseFetchung'

const CardCurrency = (props) => {

    const {CourseFetching} = useCourseFetching()

    const course = CourseFetching(props.currens)

     return ( 
        <div className='container text-center rounded px-2 py-5 mx-4 border h-60 bg-gradient-to-r bg-teal-50 '>
            <div className='items-center'>
                <h2 className='font-bold'>{props.currens} - {'USD'}</h2>
                <div className="flex justify-evenly">
                    <img className='inline-block mx-2 my-3 opacity-50 w-12' src= {`https://www.cryptocompare.com${props.currensImg}?width=80` } alt='currensy'/>
                    <img className='inline-block mx-2 my-3 opacity-30 w-12' src= {`https://img2.freepng.ru/20180131/vvw/kisspng-dollar-sign-united-states-dollar-symbol-gold-dollar-png-transparent-image-5a7276c1d0fcd7.844791431517450945856.jpg`}alt='currensy'/>
                </div>
            </div>
            <div className='my-2'>
                <h1 className='font-bold font-mono inline-block text-2xl'>{course}</h1>
            </div>
                <div>
                <button className='text-slate-500 hover:text-red-600 mt-5' onClick={() => props.remove(props.currens)}><span className='inline-block'><BsTrashFill/></span><span> Delete</span></button>
            </div>
        </div>
     );
}
 
export default CardCurrency;