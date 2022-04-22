import React from "react"
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "../../components/button";
import { Container, Content } from "./styles";

const Home = () => {
  const history = useHistory()

//   if (authenticated){
//     return <Redirect to='/dashboard' />
// }

  const handleNavigation = (path) => {
    return history.push(path)
  }

  return (
    <Container>
      <Content>
        <h1>Do<span>.</span>it</h1>
        <span>Organize-se de forma fácil e efetiva</span>           
        <div>
          <Button whiteSchema onClick={handleNavigation("/signUp")}>Cadastre-se</Button>
          <Button onClick={handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
