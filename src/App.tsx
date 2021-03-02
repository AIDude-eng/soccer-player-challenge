// Imports
import React from 'react';
import './App.css';
import data from './data/soccer_small.json';
// Components
import PlayerTable from './components/PlayerTable';
import PlayerDetailView from "./components/PlayerDetailView";

// Types
type Props = {
}
type State = {
  selectedPlayer: String
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedPlayer: "Nothing",
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(player: String): void {
    this.setState({selectedPlayer: player});
  }

  render() {
    return (
      <section>
        <h1 className="title">Soccer Player Stats</h1>
        <div className="App">
          <PlayerTable data={data} selectPlayer={this.handleSelect} />
          <PlayerDetailView data={data} selectedPlayer={this.state.selectedPlayer}/>
        </div>
      <p>By Florian Engertsberger</p>
      </section>
    );
  }
}

export default App;
