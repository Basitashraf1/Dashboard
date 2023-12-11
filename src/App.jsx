import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  let [id,setId]=useState("bitcoin")
  let [response,setResponse]=useState({})
  const crypto= async()=>{
    let data= await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    let jResponse=await data.json()
    console.log(jResponse);
    setId(id)
    setResponse(jResponse)
  }
  const handleSubmit=(event)=>{
    setId(event.target.value)
    setResponse(response)
    crypto()
  }
  useEffect(()=>{
    crypto();
  },[id])
  return (
    <>
    <Header handle_Submit={handleSubmit}/>
    <Card coinName={response.name} currentPrice={response.market_data?response.market_data.current_price["usd"]:""} marketCap={response.market_data?response.market_data.market_cap_change_percentage_24h:""} marketcapRank={response.market_data?response.market_data.market_cap_rank:""} high24Hrs={response.market_data?response.market_data.high_24h["usd"]:""}
    low24Hrs={response.market_data?response.market_data.low_24h["usd"]:""}
    />
    </>
  )
}

export default App