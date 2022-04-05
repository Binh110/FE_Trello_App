function App() {
  return (
    <div className="trello-container">
      <nav className="navbar app">App bar</nav>
      <nav className="navbar board">Board bar</nav>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://trello.com/1/cards/6246f10901c3fa01604fe782/attachments/6246f10c01c3fa01604fe8e0/previews/6246f10c01c3fa01604fe8e5/download/Design.png"></img>
              Design & Research
            </li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
            <li>second</li>
            <li>third</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://trello.com/1/cards/6246f10901c3fa01604fe782/attachments/6246f10c01c3fa01604fe8e0/previews/6246f10c01c3fa01604fe8e5/download/Design.png"></img>
              Design & Research
            </li>
            <li>second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://trello.com/1/cards/6246f10901c3fa01604fe782/attachments/6246f10c01c3fa01604fe8e0/previews/6246f10c01c3fa01604fe8e5/download/Design.png"></img>
              Design & Research
            </li>
            <li>second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
