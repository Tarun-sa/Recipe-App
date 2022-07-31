import Category from "./Component/Category";
import Pages from "./Pages/Pages";
import { BrowserRouter as Router } from 'react-router-dom'
import Search from "./Component/Search";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { GiKnifeFork } from "react-icons/gi"




function App() {
  return (
    <div className="App">
      <Router >
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}
const Logo = styled(Link)`
text-decoration:none;
font-size:1.5rem;
font-weight:400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding:2rem 0;
display:flex;
justify-content:"flex-start";
align-items:center;
svg{
  font-size:2rem;
}`

export default App;
