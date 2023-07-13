import React from 'react'
import { useState } from 'react'
const RestaurantApp = () => {
  const [giftCard, setGiftCard]=useState(
    {
      firstName: "Luthf",
      lastName: "ullah",
      text: "Free dinner for 4 guests",
      valid: true,
      instructions: "To use your coupon, click the button below.",
    });
    function spendGiftCard() {
      setGiftCard(prevState => {
        return ({
          ...prevState,
          text: "Your coupon has been used.",
          valid: false,
          instructions: "Please visit our restaurant to renew your gift card.",
          
        }
          )
        });
      }
      function olddata(){
        setGiftCard(prevState=>{
          return{
            ...prevState,
            firstName: "Luthf",
            lastName: "ullah",
            text: "Free dinner for 4 guests",
            valid: true,
            instructions: "To use your coupon, click the button below.",
          }
        })
      }
      
    
      return (
        <div className='bg-white measure center ba' style={{padding: '40px'}}>
          <h1 className='bb'>Gift Card Page</h1>

          <h2 >Customer: {giftCard.firstName} {giftCard.lastName}</h2>

          <h3 >{giftCard.text}</h3>

          <p >{giftCard.instructions} </p>

                {
                    giftCard.valid && (
                    <button onClick={spendGiftCard}>
                        Spend Gift Card
                    </button>
                    )
                }
                {
                  
                  <button onclick={olddata}>Back</button>
                }

        </div>
      );
    }

export default RestaurantApp