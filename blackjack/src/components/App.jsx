import { useState,useEffect } from 'react'
import './App.css'
import { Dealer } from './players/Dealer'
import { Player } from './players/Player'


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






function App() {

  let id = 1;
  const deckList = SUIT_LIST.reduce((acc, suit) => {
  NUMBER_LIST.forEach((number, index) => {
    let value = index + 2;
    if (index >= 9 && index < 12) value = 10;
    if (index === 12) value = 11;
    acc.push([number, suit, value, id++]);
  });
  return acc;
}, []);

  const [deck,setDeck] = useState(deckList);
  const [playerHand,setPlayerHand] = useState([]);
  const [dealerHand,setDealerHand] = useState([]);

    const getRandomNumber = () => {
      return Math.floor(Math.random() * deck.length);
    }
    const dealToDealer = () => {
      const ranomNumber = getRandomNumber();
      setDealerHand([...playerHand, deck[ranomNumber]]);
      const newdeck = deck.splice(ranomNumber,1);
      setDeck(newdeck);
    }

    const dealToPlayer = () => {

        const ranomNumber = getRandomNumber();
        setPlayerHand([...playerHand, deck[ranomNumber]]);
        const newdeck = deck.splice(ranomNumber,1);
        setDeck(newdeck);
    }

    useEffect(() => {
      dealToPlayer();
      dealToPlayer();
      dealToDealer();
      dealToDealer();
    },[]);

    console.log(dealerHand, playerHand);
    
  return (
    <>
     <div className="background h-screen w-screen bg-black flex justify-center items-center">
        <div className="tablero__blackjack w-2/3 h-2/3 flex justify-between">

          <Dealer deck={deck} />
          <Player deck={deck} />

        </div>
     </div>
    </>
  )
}

export default App
