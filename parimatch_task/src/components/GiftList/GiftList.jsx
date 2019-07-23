import React, {PureComponent} from 'react'

import Gift from './apps/Gift/Gift.jsx'
import items from '../../items'

class GiftList extends PureComponent {

  render() {
    return (
      <div className='gifts_list_container'>
        <ul>
          {
            items.map(({ id, name, description, end, image, items, probability_total, start }) => (
              <Gift
                key={id} 
                id={id}
                name={name}
                description={description}
                end={end}
                image={image}
                items={items}
                total={probability_total}
                start={start}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default GiftList
