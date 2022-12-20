import React, { useEffect, useState } from 'react';
import CardCurrency from './components/CardCurrency';
import LoaderSpiner from './components/Loader';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import {useCardFeatching} from './hooks/cardFeatching';

function App() {
  const {currensy, loading, removeCard} = useCardFeatching()
  const [searchValue, setsearchValue] = useState('')
  const [numberVisibleCards, setNumberVisibleCards] =useState(10)

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
  
  
  return (
    <div  className='bg-gradient-to-r from-slate-50 to-gray-150 h-full '>
      {loading && <LoaderSpiner/>}
      {loading ||<NavBar/>}
      {loading ||<SearchForm formInputValue ={hendelSearchName}/>}

      <div className="App grid xl:grid-cols-5 md:grid-cols-3 gap-5 ">
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
          from-green-100
          to-blue-100
          hover:from-pink-100
          hover:to-yellow-100'
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
