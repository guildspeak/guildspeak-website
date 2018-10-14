import styled from 'styled-components'
import Button from '../../components/Button'

const HomeWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  padding: 8px;
  background: #202020;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  font-size: 24px;
  text-align: center;
`

const LinkButton = styled(Button)`
  height: 36px;
  margin-top: 12px;
  width: 25%;
  display: inline-block;
  border-radius: 4px;
  padding: 0px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #eeeeee;
    background: #009688;

    a {
      color: #eeeeee;
    }
  }

  a {
    font-family: 'Francois One', sans-serif;
    color: #000;
    font-size: 26px;
    text-decoration: none;
  }
`

export { HomeWrapper, Content, LinkButton }
