import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcing (params) {
    const [currensy, setCurrensy] = useState([])

    useEffect (
        () => {
            axios.get('https://min-api.cryptocompare.com/data/all/coinlist?summary=true&api_key=0540ac14660cf7002d6f96fd8a4571357bbcdd65a9a0bde132287d224c01e0ab')
            .then(res => {
                console.log(res);
                setCurrensy(res.data)
                console.log(currensy);
            })
            .catch (error => {
                console.log(error);
            })
        }
    )

    return(
        <div>
            <ul>
                {currensy.map(post => <li >{currensy}</li>)}
            </ul>
        </div>
    )
    
}
export default DataFetcing ;
