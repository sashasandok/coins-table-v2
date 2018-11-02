// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// styles
import './Layout.css'
import img from '../../assets/images/coin.jpeg'

// semantic-ui
import { Image } from 'semantic-ui-react'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          <p>Coins Table</p>
          <div>
            <Image src={img} alt="image" width={50} height={50} />
          </div>
        </header>
        <section className="layout-content">{this.props.children}</section>
        <footer className="layout-footer">&copy; Alex_Sandok 2018</footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
