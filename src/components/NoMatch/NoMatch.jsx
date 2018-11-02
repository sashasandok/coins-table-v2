//react
import React from 'react'

// semantic components
import { Icon } from 'semantic-ui-react'

//components
import Layout from '../../HOC/Layout/Layout'

// styles
import './NoMatch.css'

const NoMatch = () => {
  return (
    <Layout>
      <strong className="no-match">
        <p>
          <Icon name="minus circle" size="big" />
          404 Page not found!
        </p>
      </strong>
    </Layout>
  )
}

export default NoMatch
