import React, {PureComponent} from 'react'

import Details from './apps/Details/Details.jsx'

class Gift extends PureComponent {
  state = {
    showDetails: false,
  }

  showGiftDetails = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const { name, description, end, image, items, total, start } = this.props
    const { showDetails } = this.state
    
    const startDate = start.split('T')[0].split("-").reverse().join("-")
    const endDate = end.split('T')[0].split("-").reverse().join("-")
    const bgImg = {
      backgroundImage: `url(data:image/svg+xml;base64,${image})`
    }
          
    return (
      <div>
        <li>
          {
            showDetails ? 
            <div className='gift_details_container'>
              <Details items={items} />
            </div>
            :
            <div className='gift_image_container' style={bgImg}>
              <div className='gift_img'></div>
            </div> 
          }
          <div className='gift_text_container'>
            <span className='gift_title'>{name}</span>
            <div className='gift_date'>
              <div>
                <span>{startDate}</span>
                <span className='gift_text'>start</span>
              </div>
              <div>
                <span>{endDate}</span>
                <span className='gift_text'>end</span>
              </div>
            </div>
            <span className='description'>{description}</span>
            <div className='gift_info'>
              <div>
                <span className='gift_info_value'>{items.length}</span>
                <span className='gift_text'>items</span>
              </div>
              <div>
                <span className='gift_info_value'>{total}</span>
                <span className='gift_text'>chance total</span>
              </div>
            </div>
            <div className='gift_button' onClick={this.showGiftDetails}>Explain</div>
          </div>
        </li>
      </div>
    )
  }
}

export default Gift
