import React, { useEffect, useState } from 'react';
import CardCurrency from './components/CardCurrency';
import LoaderSpiner from './components/Loader';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm'
import img from './img/logo.jpg'

const apiKey = "0540ac14660cf7002d6f96fd8a4571357bbcdd65a9a0bde132287d224c01e0ab"

function App() {

  const [currensy, setCurrensy] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchValue, setsearchValue] = useState('')
  const [numberVisibleCards, setNumberVisibleCards] =useState(10)


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
    
  const addMoreCards = () =>{
    return setNumberVisibleCards(numberVisibleCards + 10) 
  }
  
  const removeCard = (deleteElement) => {
    setCurrensy(currensy.filter(currensy => currensy[0] !== deleteElement))
  }
  
  return (
    <div  className='bg-gradient-to-r from-slate-100 to-gray-300 h-full '>
      {loading && <LoaderSpiner/>}
      {loading ||<NavBar/>}
      {loading ||<SearchForm formInputValue ={hendelSearchName}/>}

      <div className="App grid xl:grid-cols-5 md:grid-cols-3 gap-2 ">
      { loading ||  filterCurrensys.slice(0,numberVisibleCards).map(currens => 
        <CardCurrency 
        remove={removeCard} 
        currens = {currens[0]} 
        currensImg = {currens[1].ImageUrl}
        key ={currens[1].Id}/> 
        )}
      </div>
      {loading || <div className='text-center pt-5'>
        <button 
          className='
          p-2 rounded-xl 
          bg-gradient-to-r
          from-green-300
          to-blue-300
          hover:from-pink-300
          hover:to-yellow-300'
          onClick={addMoreCards}
        >
          + Add 10 currensy
        </button>
      </div>
      }

    </div>
  );
}

export default App;
