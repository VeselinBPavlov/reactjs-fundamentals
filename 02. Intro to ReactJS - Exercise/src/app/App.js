import React from 'react';
import '../style/app.css';
import render from '../index';
import Contacts from '../database/contacts.json';
import Details from '../components/Details';

let contactIndex = 0;

function details(contact) {
    return <Details firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} email={contact.email} />
}

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

const renderList = () => {
    const finalList = [];
    for (const contact of Contacts) {
      finalList.push(showContact(contact, finalList.length));
    }
    return finalList;
}

function App() {
  return (
    <div class="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
        <div id="list">
            <h1>Contacts</h1>
            <div class="content">
            {renderList()}                
            </div>
        </div>
        <div id="details">
            <h1>Details</h1>
            {details(Contacts[contactIndex])}
        </div>
    </div>
      <footer>Contact Book SPA &copy; 2017</footer>
    </div>
  );
}

export default App;
