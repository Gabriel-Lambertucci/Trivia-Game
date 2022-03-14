import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    return (
      <div>
        <h1 data-testid='ranking-title'>Ranking</h1>
        <Link
          to="/"
        >
          <button
            type="button"
            name="button-play-again"
            data-testid="btn-go-home"
          >
            Home
          </button>
        </Link>
      </div>
    )
  }
}

export default Ranking;
