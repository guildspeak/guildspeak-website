import * as React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../../components/Header'
import { Content, LinkButton, HomeWrapper } from './styles'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomeWrapper>
          <Content>Create, join and become guild member</Content>
          <LinkButton>
            <a href="https://github.com/guildspeak">GITHUB</a>
          </LinkButton>
        </HomeWrapper>
      </div>
    )
  }
}

export default withRouter(Home as any)
