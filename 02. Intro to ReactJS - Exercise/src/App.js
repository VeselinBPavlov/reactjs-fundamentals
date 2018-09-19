import React, { Component } from 'react';
//import logo from './logo.svg';
import './style/app.css';
import ContactList from './contacts.json';
import render from './index';

let contactIndex = 0;

const showContact = (data, currentIndex) => (
      <div className="contact" key={data.email} data-id={currentIndex} onClick={e => selectDetails(currentIndex, e)}>
          <span className="avatar small">&#9787;</span>
          <span className="title">{data.firstName} {data.lastName}</span>
      </div>
);

const selectDetails = index => {
    contactIndex = index;
    render(App(), document.getElementById('root'));
}


const details = contact => (
  <div className="content">
      <div className="info">
          <div className="col">
              <span className="avatar">&#9787;</span>
          </div>
          <div className="col">
              <span className="name">{contact.firstName}</span>
              <span className="name">{contact.lastName}</span>
          </div>
      </div>
      <div className="info">
          <span className="info-line">&phone; {contact.phone}</span>
          <span className="info-line">&#9993; {contact.email}</span>
      </div>
  </div>    
)

const renderList = () => {
    const finalList = [];
    for (const contact of ContactList) {
      finalList.push(showContact(contact, finalList.length));
    }
    return finalList;
}

const App = () => (  
<div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
        <div id="list">
            <h1>Contacts</h1>
            <div className="content">
                {renderList()}                
            </div>
        </div>
        <div id="details">
            <h1>Details</h1>
            {details(ContactList[contactIndex])}
        </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
</div>
);
  


export default App;
