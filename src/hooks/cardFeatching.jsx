import  { useState, useEffect } from 'react';

export function useCardFeatching (){
    const [currensy, setCurrensy] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setsearchValue] = useState('')
    const apiKey = "0540ac14660cf7002d6f96fd8a4571357bbcdd65a9a0bde132287d224c01e0ab"

    async function fetchCurrensy () {
        setLoading(true)
        const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?summary=true&api_key=${apiKey}`)
        const data = await response.json()
        setCurrensy(Object.entries(data.Data))
        setLoading(false)
      }
        
      useEffect(() => {
        fetchCurrensy ()
      },[])

      const removeCard = (deleteElement) => {
        setCurrensy(currensy.filter(currensy => currensy[0] !== deleteElement))
      }

      const hendelSearchName = (searchFormValue) => {
        setsearchValue(searchFormValue)
      }
      
      const filterCurrensys = currensy.filter((currens) => {
        if (searchValue.trim().length > 1) {
          return currens[0].toLowerCase().includes(searchValue.trim().toLowerCase())
        }else{
          return currensy
        }
      })
    return {currensy, loading, removeCard, filterCurrensys, hendelSearchName }
}