import React from 'react';

import Notes from '../Notes/Notes';
import Whiteboard from '../Whiteboard/Whiteboard';
import Todo from '..Todo/Todo/Todo';
import Calendar from '../Calendar/Calendar';
import ChatAI from '../ChatAI/ChatAI';

function Dashboard({ user }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Welcome, {user.name}</h2>
        <ul>
          <li><a href="#notes">Notes Maker</a></li>
          <li><a href="#whiteboard">Whiteboard</a></li>
          <li><a href="#todo">To-Do</a></li>
          <li><a href="#calendar">Calendar</a></li>
          <li><a href="#chatai">AI Chat</a></li>
        </ul>
      </aside>
      <main className="main-content">
        <section id="notes"><Notes /></section>
        <section id="whiteboard"><Whiteboard /></section>
        <section id="todo"><Todo /></section>
        <section id="calendar"><Calendar /></section>
        <section id="chatai"><ChatAI /></section>
      </main>
    </div>
  );
}

export default Dashboard;
