import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons"
 
library.add(fab, fasFaHeart, farFaHeart)

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;