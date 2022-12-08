import React from 'react';
import Datasheet from 'react-datasheet';

export default class Tab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [
          {readOnly: true, value: '', width: '1%'},
          {value: 'split_name', readOnly: true, width: '10%'},
          {value: 'lot_id', readOnly: true, width: '10%'},
          {value: 'laser_tag', readOnly: true, width: '10%'},
          {value: 'split_group', readOnly: true, width: '10%'},
          {value: 'split_group_desc', readOnly: true, width: '10%'}
        ],
        [{readOnly: true, value: 1}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 2}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 3}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 4}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 5}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 6}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 7}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 8}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 9}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 10}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 11}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 12}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 13}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 14}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 15}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 16}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 17}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 18}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 19}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 20}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 21}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 22}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 23}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 24}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}],
        [{readOnly: true, value: 25}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}, {readOnly: false, value: ''}]
      ]
    }
  }

  getValue() {
    const gridValues = this.state.grid;
    return gridValues;
  }

  render () {
    return (
      <Datasheet
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
        onCellsChanged={changes => {
          const grid = this.state.grid.map(row => [...row])
          changes.forEach(({cell, row, col, value}) => {
            grid[row][col] = {...grid[row][col], value}
          })
          this.setState({grid})
        }}
      />
    )
  }
}
