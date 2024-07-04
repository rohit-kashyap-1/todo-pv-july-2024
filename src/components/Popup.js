import React from 'react'
import './popup.css'

export default function Popup(props) {
  return (

      <div className={'popup '+props.active}>
        <div className='popup-body'>
          <div className='popup-content'>
            <div className='popup-headerx'>
              <h2>Popup Heading</h2>
              <button>close</button>
            </div>

            <p>Create a PHP form for event registration with the following fields: full name (text input), email (text input), sessions (checkboxes: Session 1, Session 2, Session 3), and payment method (dropdown: Credit Card, PayPal, Bank Transfer). Write PHP code to handle the form submission and display the registration details.</p>
          </div>
        </div>
      </div>

  )
}
