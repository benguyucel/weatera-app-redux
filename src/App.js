import styled, { createGlobalStyle } from 'styled-components'
import Europe from './Components/Europe';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}
body{
  font-size: 62.5%;
  background-color: #192a56;
  font-family: 'Noto Sans', sans-serif;}
`
const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
const App = () => {
  return (
    <>
      <MainContainer>
        <Europe />
      </MainContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
