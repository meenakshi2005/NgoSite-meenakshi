import { render } from '@testing-library/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Form = () => {

   const [mAmnt ,setMinAmnt] = useState(0)

  const minAmnt = (eventMin) => {
    var amnt = eventMin.target.value;
    setMinAmnt(amnt)

  }

  const [showhide, setShowHide] = useState("")

  const handleOnchange = (event) => {
    let value = event.target.value;
    setShowHide(value);
  }

  const handleMinAmount = () => {

    if (showhide === "money" && mAmnt <= 250) {
      alert("Money less then 250");

    }

  }

  //FOR CONSOLING DATA

  // const handleSubmition = (eventValue) => {
  //   eventValue.preventDefault();
  
  //   for(let i=0 ; i < 7 ;i++)
  //   {
  //   console.log(eventValue.target[i].value);
  //   }
  
  // }

  return (
    <>
      <div className="container">
        <h2>Donation Form</h2>
        <form id="donationForm" method="post" action="/submit-donation" onSubmit={handleSubmition}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="name" name="firstName" required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="name" name="lastName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">Phone:</label>
          <input type="number" id="phone" name="phone" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="items">Select the donation:</label>
          <select name="donation" id="donation" onChange={handleOnchange} >
            <option value="Select">Select the Donation</option>
            <option value="books">Books</option>
            <option value="clothes">Clothes</option>
            <option value="money">Money</option>
            <option value="shoes">Shoes</option>
          </select>
          <br />

          {
            showhide === "money" && (
              <div className="amount">
                <label htmlFor="Amount">Amount:</label>
                <input type="number" id='amount' placeholder='Amount Should be greater Then 250' onChange={minAmnt} />
              </div>
            )
          }
            
          <button type="submit" id="submitButton" onClick={handleMinAmount}>Proceed to Next Page</button>
        </form>
        
      </div>
    </>
  )
}

export default Form