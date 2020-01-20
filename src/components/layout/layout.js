import React, {Component} from 'react'
import styles from './layout.module.scss'

class Layout extends Component {

  render() {
    return (
      <div className={styles.layout}>
        <div className="container">
          <main className={styles.main}>
            { this.props.children }
          </main>
        </div>
      </div>
    )
  }
}

export default Layout