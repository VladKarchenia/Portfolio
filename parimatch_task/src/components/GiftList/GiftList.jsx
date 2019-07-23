import React, {PureComponent} from 'react'

import Gift from './apps/Gift/Gift.jsx'
import data from '../../data/items.js'

const items = data
console.log(items)
// const GiftList = ({ items }) => (
class GiftList extends PureComponent {

  // state = {
  //   items: {},
  // }

  // componentDidMount() {
  //   fetch('items.js')
  //   .then((response) => response.text())
  //   // .then((response) => JSON.stringify(response))
  //   .then(text => JSON.parse(text.slice(0, text.length - 1).split('\n')[4]))
  //   // .then((data) => this.setState({items: data}))
  //   .catch(error => console.error(error))
  // }

  render() {
    // const { items } = this.state
    // console.log(items)
    return (
      <div className='gifts_list_container'>
        <ul>
          {/* <li>
            <div className='gift_image_container'>
              <div className='gift_img'></div>
            </div>
            <div className='gift_details_container'>
              
            </div>
            <div className='gift_text_container'>
              <span className='gift_title'>Title</span>
              <div className='gift_date'>
                <div>
                  <span>12-07-2019</span>
                  <span className='gift_text'>start</span>
                </div>
                <div>
                  <span>22-07-2019</span>
                  <span className='gift_text'>end</span>
                </div>
              </div>
              <span className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, error.</span>
              <div className='gift_info'>
                <div>
                  <span className='gift_info_value'>20</span>
                  <span className='gift_text'>items</span>
                </div>
                <div>
                  <span className='gift_info_value'>100</span>
                  <span className='gift_text'>chance total</span>
                </div>
              </div>
              <div className='gift_button'>Explain</div>
            </div>
          </li>

          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> */}
          {/* {
            items.map(({ id, value }) => (
              <Gift
                key={id} 
                value={value}
              />
            ))
          } */}
          <Gift />
        </ul>
      </div>
    )
  }
}

export default GiftList
