import React, {PureComponent} from 'react'

class Details extends PureComponent {
  render() {
    const { items } = this.props
    return (
      <div className='table_container'>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Level</th>
              <th>Cost</th>
              <th>Chance</th>
            </tr>
          </thead>
          
          <tbody>
            {
              items.map(({ id, name, level, cost, chance }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{level}</td>
                  <td>{cost}</td>
                  <td>{chance}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Details
