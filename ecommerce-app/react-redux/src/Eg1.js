import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Mock API endpoints
const EMAILS_API = 'https://flipkart-email-mock.now.sh/';
const EMAIL_BODY_API = 'https://flipkart-email-mock.now.sh/?id=';

// Initial state
const initialState = {
  emails: [],
  selectedEmail: null,
  filter: 'all', // all, favorite, read, unread
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMAILS':
      return { ...state, emails: action.payload, selectedEmail: null };
    case 'SELECT_EMAIL':
      return { ...state, selectedEmail: action.payload };
    case 'MARK_FAVORITE':
      return {
        ...state,
        emails: state.emails.map((email) =>
          email.id === action.payload ? { ...email, favorite: !email.favorite } : email
        ),
      };
    case 'FILTER_EMAILS':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

// Redux store
const store = createStore(reducer);

// Action creators
const fetchEmails = (page) => {
  fetch(`${EMAILS_API}?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      store.dispatch({ type: 'FETCH_EMAILS', payload: data });
    });
};

const getEmailBody = (id) => {
  fetch(`${EMAIL_BODY_API}${id}`)
    .then((response) => response.json())
    .then((data) => {
      store.dispatch({ type: 'SELECT_EMAIL', payload: data });
    });
};

const markAsFavorite = (id) => {
  store.dispatch({ type: 'MARK_FAVORITE', payload: id });
};

const filterEmails = (filter) => {
  store.dispatch({ type: 'FILTER_EMAILS', payload: filter });
};

// Email List Component
const EmailList = connect((state) => ({
  emails: state.emails,
  filter: state.filter,
}), { fetchEmails, getEmailBody, filterEmails })(
  ({ emails, filter, fetchEmails, getEmailBody, filterEmails }) => {
    useEffect(() => {
      fetchEmails(1); // Fetch emails from the first page on component mount
    }, [fetchEmails]);

    return (
      <div>
        <button onClick={() => filterEmails('all')}>All</button>
        <button onClick={() => filterEmails('favorite')}>Favorite</button>
        <button onClick={() => filterEmails('read')}>Read</button>
        <button onClick={() => filterEmails('unread')}>Unread</button>
        {emails
          .filter((email) => {
            if (filter === 'favorite') return email.favorite;
            if (filter === 'read') return email.read;
            if (filter === 'unread') return !email.read;
            return true; // filter === 'all'
          })
          .map((email) => (
            <div key={email.id}>
              <div>{email.from}</div>
              <div>{email.subject}</div>
              <div>{email.date}</div>
              <button onClick={() => getEmailBody(email.id)}>View Email</button>
            </div>
          ))}
      </div>
    );
  }
);

// Email Body Component
const EmailBody = connect((state) => ({
  selectedEmail: state.selectedEmail,
}), { markAsFavorite })(
  ({ selectedEmail, markAsFavorite }) => (
    <div>
      {selectedEmail ? (
        <div>
          <div>{selectedEmail.subject}</div>
          <div>{selectedEmail.body}</div>
          <div>{selectedEmail.date}</div>
          <button onClick={() => markAsFavorite(selectedEmail.id)}>
            Mark as {selectedEmail.favorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </div>
      ) : (
        <p>Select an email to view</p>
      )}
    </div>
  )
);

// Main App Component
const App = () => (
  <Provider store={store}>
    <div>
      <h1>Email Client App</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <EmailList />
        </div>
        <div style={{ flex: 2 }}>
          <EmailBody />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
