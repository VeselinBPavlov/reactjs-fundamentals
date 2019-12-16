/* eslint-disable no-undef */
import React, { useState, Fragment, useContext } from 'react'
import Header from '../header'
import { AuthContext } from '../ContextWrapper'

const CheckoutPage = () => {
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [iban, setIban] = useState('')
  const authValue = useContext(AuthContext)

  const myWidget = cloudinary.createUploadWidget({
    cloudName: '',
    apiKey: '',
    uploadPreset: ''
  }, (error, result) => { 
      if (!error && result && result.event === "success") { 
        console.log('Done! Here is the image info: ', result.info); 
        console.log('URL', result.info.url)

      }
    }
  )
  
  return (
    <Fragment>
      <Header />
      <div>
        <div>
          <label>
            Address:
            <input value={address} onChange={e => setAddress(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            IBAN:
            <input value={iban} onChange={e => setIban(e.target.value)} />
          </label>
        </div>
        <p>Authenticated: {`${authValue.auth}`}</p>
      </div>
      <button id="upload_widget" onClick={() => myWidget.open()} className="cloudinary-button">Upload files</button>
      <img src={'http://res.cloudinary.com/ad2drive/image/upload/v1575236506/khupm7uhfgxnog7lt52o.jpg'} />
    </Fragment>
  )
}


export default CheckoutPage