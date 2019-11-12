import React from 'react';
import {Square} from '../square/square';

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  render() {
    const rows = [0,1,2];
    const cols = [0,1,2];

    return (
      <div>
        {rows.map((row) =>  {
          return (
            <div key={row} className="board-row">
              {cols.map((col) => {
                return (this.renderSquare((row*cols.length)+col));
              })}
            </div>
          )
        })}
      </div>
    );
  }
}