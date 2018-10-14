import styled from 'styled-components'
const assets = {
  logo: require('../../../public/assets/logo.svg')
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  padding: 8px;
  background: #202020;
  align-items: center;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
`

const Brand = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  margin-right: 8px;
  background: url('${assets.logo}') no-repeat;
`

const Title = styled.div`
  font-family: 'Francois One', sans-serif;
  font-size: 32px;
`

export { Wrapper, Brand, Title }
