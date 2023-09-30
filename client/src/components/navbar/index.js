import {
  Nav,
  LogoContainer,
  Logo,
  LoginBtn,
  SignUpBtn,
  Wrapper,
  Input,
  BtnContainer,
  SearchBtn,
} from "./navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Wrapper>
        <Input placeholder="Search" />
        <SearchBtn>Search</SearchBtn>
      </Wrapper>
      <BtnContainer>
        <LoginBtn>Log In</LoginBtn>
        <SignUpBtn>Sign Up</SignUpBtn>
      </BtnContainer>
    </Nav>
  );
};

export default Navbar;
