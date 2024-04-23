import { useState,useEffect } from 'react'
import './App.css'
import { Cards } from './Cards/Cards';

const SUIT_LIST = ["♥️", "♦️", "♠️", "♣️"];
const NUMBER_LIST = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

const getRandomNumber = (list) => {
  return Math.floor(Math.random() * list.length);
}




function App() {

  const [playerHand,setPlayerHand] = useState([]);
  const [dealerHand,setDealerHand] = useState([]);
  const [playerPoints,setPlayerPoints] = useState(0);
  const [dealerPoints, setDealerPoints] = useState(0);

 
  
    useEffect(() => {
      
      const playerCardNumberOne = getRandomNumber(NUMBER_LIST);
      const playerCardSuitOne = getRandomNumber(SUIT_LIST);
      const playerCardNumberTwo = getRandomNumber(NUMBER_LIST);
      const playerCardSuitTwo = getRandomNumber(SUIT_LIST);
      const playerDealtCards = [[NUMBER_LIST[playerCardNumberOne],SUIT_LIST[playerCardSuitOne]],[NUMBER_LIST[playerCardNumberTwo],SUIT_LIST[playerCardSuitTwo]]];

      setPlayerHand([...playerHand, playerDealtCards]);
      let playerPointsToAdd = 0;
      
      if(NUMBER_LIST[playerCardNumberOne] === 'A') playerPointsToAdd = playerPointsToAdd + 11;
      if(NUMBER_LIST[playerCardNumberTwo] === 'A') playerPointsToAdd = playerPointsToAdd + 11;
      if( NUMBER_LIST[playerCardNumberOne] === 'J' || NUMBER_LIST[playerCardNumberOne] === 'Q' || NUMBER_LIST[playerCardNumberOne] === 'K') playerPointsToAdd = playerPointsToAdd + 10;
      if( NUMBER_LIST[playerCardNumberTwo] === 'J' || NUMBER_LIST[playerCardNumberTwo] === 'Q' || NUMBER_LIST[playerCardNumberTwo] === 'K') playerPointsToAdd = playerPointsToAdd + 10;
      if( NUMBER_LIST[playerCardNumberOne] !== 'J' && NUMBER_LIST[playerCardNumberOne] !== 'Q' && NUMBER_LIST[playerCardNumberOne] !== 'K' && NUMBER_LIST[playerCardNumberOne] !== 'A') playerPointsToAdd = playerPointsToAdd + (NUMBER_LIST[playerCardNumberOne] * 1);
      if( NUMBER_LIST[playerCardNumberTwo] !== 'J' && NUMBER_LIST[playerCardNumberTwo] !== 'Q' && NUMBER_LIST[playerCardNumberTwo] !== 'K' && NUMBER_LIST[playerCardNumberTwo] !== 'A') playerPointsToAdd = playerPointsToAdd + (NUMBER_LIST[playerCardNumberTwo] * 1);
      
      setPlayerPoints(playerPointsToAdd);



      const dealerCardNumberOne = getRandomNumber(NUMBER_LIST);
      const dealerCardSuitrOne = getRandomNumber(SUIT_LIST);
      const dealerCardNumberTwo = getRandomNumber(NUMBER_LIST);
      const dealerCardSuitTwo = getRandomNumber(SUIT_LIST);
      const dealerDealtCards = [[NUMBER_LIST[dealerCardNumberOne],SUIT_LIST[dealerCardSuitrOne]],[NUMBER_LIST[dealerCardNumberTwo],SUIT_LIST[dealerCardSuitTwo]]];

      setDealerHand([...dealerHand, dealerDealtCards]);

      let dealerPointsToAdd = 0;
      
      if(NUMBER_LIST[dealerCardNumberOne] === 'A') dealerPointsToAdd = dealerPointsToAdd + 11;
      if(NUMBER_LIST[dealerCardNumberTwo] === 'A') dealerPointsToAdd = dealerPointsToAdd + 11;
      if( NUMBER_LIST[dealerCardNumberOne] === 'J' || NUMBER_LIST[dealerCardNumberOne] === 'Q' || NUMBER_LIST[dealerCardNumberOne] === 'K') dealerPointsToAdd =  dealerPointsToAdd + 10;
      if( NUMBER_LIST[dealerCardNumberTwo] === 'J' || NUMBER_LIST[dealerCardNumberTwo] === 'Q' || NUMBER_LIST[dealerCardNumberTwo] === 'K') dealerPointsToAdd  = dealerPointsToAdd + 10;
      if( NUMBER_LIST[dealerCardNumberOne] !== 'J' && NUMBER_LIST[dealerCardNumberOne] !== 'Q' && NUMBER_LIST[dealerCardNumberOne] !== 'K' && NUMBER_LIST[dealerCardNumberOne] !== 'A') dealerPointsToAdd = dealerPointsToAdd +  NUMBER_LIST[dealerCardNumberOne] * 1;
      if( NUMBER_LIST[dealerCardNumberTwo] !== 'J' && NUMBER_LIST[dealerCardNumberTwo] !== 'Q' && NUMBER_LIST[dealerCardNumberTwo] !== 'K' && NUMBER_LIST[dealerCardNumberTwo] !== 'A') dealerPointsToAdd = dealerPointsToAdd +  NUMBER_LIST[dealerCardNumberTwo] * 1;
     
      setDealerPoints(dealerPointsToAdd);

      
    },[]);

   
    const handleHit = () => {
      const playerCardNumberOne = getRandomNumber(NUMBER_LIST);
      const playerCardSuitOne = getRandomNumber(SUIT_LIST);
      
      const playerDealtCards = [[NUMBER_LIST[playerCardNumberOne],SUIT_LIST[playerCardSuitOne]]];
      setTimeout(() => {
        setPlayerHand([...playerHand, playerDealtCards]);
      },300)
      
      let playerPointsToAdd = 0;
      
      if(NUMBER_LIST[playerCardNumberOne] === 'A') playerPointsToAdd = playerPointsToAdd + 11;
      
      if( NUMBER_LIST[playerCardNumberOne] === 'J' || NUMBER_LIST[playerCardNumberOne] === 'Q' || NUMBER_LIST[playerCardNumberOne] === 'K') playerPointsToAdd = playerPointsToAdd + 10;
      
      if( NUMBER_LIST[playerCardNumberOne] !== 'J' && NUMBER_LIST[playerCardNumberOne] !== 'Q' && NUMBER_LIST[playerCardNumberOne] !== 'K' && NUMBER_LIST[playerCardNumberOne] !== 'A') playerPointsToAdd = playerPointsToAdd + (NUMBER_LIST[playerCardNumberOne] * 1);
      

        setPlayerPoints(playerPoints + playerPointsToAdd);
      
      
    }

    const handleStand = () => {

      const dealerTurn = () => {
        let dealerPointsCopy = dealerPoints;
        let dealerHandCopy = [...dealerHand];
        while(dealerPointsCopy < 17){
          
          const dealerCardNumberOne = getRandomNumber(NUMBER_LIST);
          const dealerCardSuitrOne = getRandomNumber(SUIT_LIST);
        
          const dealerDealtCards = [[NUMBER_LIST[dealerCardNumberOne],SUIT_LIST[dealerCardSuitrOne]]];
          setTimeout(() => {setDealerHand([...dealerHandCopy, dealerDealtCards]);}, 400)
          
    
          
          
          if(NUMBER_LIST[dealerCardNumberOne] === 'A') dealerPointsCopy = dealerPointsCopy + 11;
          if( NUMBER_LIST[dealerCardNumberOne] === 'J' || NUMBER_LIST[dealerCardNumberOne] === 'Q' || NUMBER_LIST[dealerCardNumberOne] === 'K') dealerPointsCopy =  dealerPointsCopy + 10;
          if( NUMBER_LIST[dealerCardNumberOne] !== 'J' && NUMBER_LIST[dealerCardNumberOne] !== 'Q' && NUMBER_LIST[dealerCardNumberOne] !== 'K' && NUMBER_LIST[dealerCardNumberOne] !== 'A') dealerPointsCopy = dealerPointsCopy +  NUMBER_LIST[dealerCardNumberOne] * 1;
        
          setDealerPoints(dealerPointsCopy);

          
        }
        
        
        if((playerPoints < 22 && playerPoints > dealerPointsCopy) || ( playerPoints < 22 && dealerPointsCopy > 21)){
          setTimeout(()=>{alert('Has Ganado !')},1000);
        }else if((dealerPointsCopy < 21 && dealerPointsCopy > playerPoints) || playerPoints > 21 ){
           setTimeout(()=>{alert('Has perdido :(')},1000);
        }else if((dealerPointsCopy < 21 && playerPoints < 21) && dealerPointsCopy === playerPoints){
          setTimeout(()=>{alert('Push, almenos no has perdido')},1000);
        }

       
        
      }
    
    dealerTurn();

      }
    
    
    const dealerCardsList = dealerHand.reduce((acc, curr) => acc.concat(curr), []).map((card,index) => {
      
      return <Cards key={index} number={card[0]} suit={card[1]} />;
    });

    const playerCardsList = playerHand.reduce((acc, curr) => acc.concat(curr), []).map((card,index) => {
      
      return <Cards key={index} number={card[0]} suit={card[1]} />;
    });
  return (
    <>
     <div className=' w-screen h-screen bg-black flex justify-center items-center'>
      <div className="w-2/3 h-2/3 bg-green-700 rounded-full flex flex-col px-5 justify-between items-center">
          <div className='flex gap-5 mt-2'>
          <div className='flex gap-5'>
            {dealerCardsList}
            </div>
            <div className='p-5 rounded-full bg-red-400'>
              {dealerPoints}
            </div>
          </div>
          <div className='flex gap-5 mb-2'>
          <div className='flex gap-5'>
            {playerCardsList}
            </div>
            <div className='p-5 rounded-full bg-red-400'>
              {playerPoints}
            </div>
          </div>
      </div>
       
     </div>
     <div className="controls h-16 w-screen fixed bottom-0 bg-slate-600 flex justify-evenly items-center">
        <button className='bg-green-500 px-5 py-2 rounded-lg text-white' onClick={handleHit}>Hit</button>
        <button className='bg-orange-500 px-5 py-2 rounded-lg text-white' onClick={handleStand}>Stand</button>
       

     </div>
     </>
  );
}

export default App
