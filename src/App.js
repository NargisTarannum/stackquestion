
import './App.css';
import { useState } from 'react';

let exp = '([{]}])'


function App() {
  const [stack,setStack] = useState([]);
  const[isempty,setEmpty] = useState(false);
  const[balance,setBalance] = useState(true);

  const check = () => {
    for(let i = 0;i<exp.length;i++){
      if(exp[i] == '(' || exp[i] == '{' || exp[i] == '['){
        stack.push(exp[i])
      }
      else {
        if(stack.length == 0){
          setEmpty(true);
        }
        else{
          var chk;
          switch(exp[i]){
            case ')' : 
                 chk = stack.pop();
                if(chk == '{' || chk == '[')  {  setBalance(false)}
                  break;
           case '}' : 
                chk = stack.pop();
                  if(chk == '(' || chk == '[')  {  setBalance(false)}
                    break; 
          case ']' : 
               chk = stack.pop();
                  if(chk == '(' || chk == '{')  {  
                    setBalance(false)}
                      break;              
                  
            default : 
             setBalance(true);

          }
        }
      }
    }
  }
  return (
    <div className="App">
      <button onClick={check}>check balance paranthesis</button>
      {isempty ? '' : balance ? <p>equal paranthesis</p>: <p>Not Balanced</p>}
    </div>
  );
}

export default App;
