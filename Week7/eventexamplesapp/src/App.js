import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const sayHello = () => {
    alert('Hello! Member1');
  };

  const handleMultipleActions = () => {
    handleIncrement(); 
    sayHello();        
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClickMe = (event) => {
    alert('I was clicked');
    console.log('Synthetic Event:', event); 
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const exchangeRate = 80; 
    let convertedAmount = 0;

    if (currency.toLowerCase() === 'rupees') {
      convertedAmount = parseFloat(amount) / exchangeRate;
      alert(`${amount} Indian Rupees (INR) is ${convertedAmount.toFixed(2)} Euro`);
   } else if (currency.toLowerCase() === 'euro') {
      
      convertedAmount = parseFloat(amount) * exchangeRate;
      alert(`${amount} Euro is ${convertedAmount.toFixed(2)} Indian Rupees (INR)`);
    
      } else {
      alert('Please enter "Euro" or "Rupees" as the target currency for conversion.');
    }
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={handleMultipleActions}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome('Welcome')}>Say Welcome</button>
      <br /><br />

      <button onClick={handleClickMe}>Click on me</button>
      <br /><br />

      <h2>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number" 
            id="amount"
            value={amount} 
            onChange={handleAmountChange} 
            required
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <input
            type="text"
            id="currency"
            value={currency}
            onChange={handleCurrencyChange}
            placeholder="e.g., Euro or Rupees"
            required
          />
        </div>
        <button type="submit">Convert</button>
      </form>
    </div>
  );
}

export default App;