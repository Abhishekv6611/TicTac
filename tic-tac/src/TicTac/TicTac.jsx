import React, { useState } from 'react'
import './TicTac.css'

const TicTac = () => {
  const[state,setState]=useState('x')
 const[cells,setCells]=useState(Array(9).fill(''))
 const [winner,setWinner]=useState('')
 const [gameOver, setGameOver] = useState(false)
  const Cell =({num})=>{
    return <td onClick={()=>handleClick(num)}>{cells[num]}</td>
  }
  const checkForWinner =(square)=>{
    let combos ={
      across:[
        [0,1,2],
        [3,4,5],
        [6,7,8]
      ],
      down:[
        [0,3,6],
        [1,4,7],
        [2,5,8]
      ],
      cross:[
        [0,4,8],
        [6,4,2]
      ],
    }
    for (let combo in combos){
      combos[combo].forEach((pattern)=>{
       if(
        square[pattern[0]]===''||
        square[pattern[1]]===''||
        square[pattern[2]]===''
       ){

       }else if(square[pattern[0]]===square[pattern[1]] &&
                square[pattern[1]]===square[pattern[2]]){
                  setWinner(square[pattern[0]])
                  setGameOver(true)
       }
      })
    }
   
  }
  const handleClick=(num)=>{
    if (gameOver) {
      return
    }
  let square =[...cells] 
   if(cells[num]!==''){
    alert('Its alredy fill')
    return

   }
   if(state === 'x'){
    square[num]='x'
    setState('o')
   }else{
    square[num]='o'
    setState('x')
   }
   checkForWinner(square)
   setCells(square)
 // console.log(square)
  }

  const playAgain=()=>{
    setWinner(null)
    setCells(Array(9).fill(''))
    setGameOver(false)
  }
  return (
    <div className='main'>
        <table>
          Turn:{state}
              <tbody>
                  <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                  </tr>
                  <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                  </tr>
                  <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                  </tr>
              </tbody>
        {winner&&(
          <>
          <p>{winner}   : is the winner</p>
          <button onClick={()=>playAgain()}>Play again</button>
          </>
        )}
        </table>
    </div>
  )
}

export default TicTac
