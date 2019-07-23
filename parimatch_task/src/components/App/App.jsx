import React, { Component } from "react"
import GiftList from '../GiftList/GiftList.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <GiftList key='GiftList' />
      </div>
    )
  }
}
