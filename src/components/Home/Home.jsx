import  { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

export default class Home extends Component {
  render() {
    return (
    <div>
        <Header />
          <div>this is the Home</div>
      <Outlet />
    </div>
    )
  }
}
