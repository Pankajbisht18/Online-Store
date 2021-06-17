import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <Nav>
            <Brand>
                <Link to="/">Online Store</Link>
            </Brand>
            <Product>
                <Link to="/shop">Products</Link>    
            </Product>
            <Login>Login</Login>
        </Nav>
    );
}
export default Header;

const Nav = styled.div`
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
`;
const Brand = styled.h2`
    width:100%;
    align-self: center;
    padding: 0px 36px;
    letter-spacing: 2px;

    a{
        text-decoration: none;
        color: #fff;
    }

    @media screen and (max-width: 400px){
        padding: 0px 5px;
    }
`;

const Login = styled.a`
    width:100%;
    align-self: center;
    flex: 1;
    padding: 0px 36px;
    text-decoration: none;
    letter-spacing: 1px;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #ffd417;
    }

    @media screen and (max-width: 400px){
        padding: 0px 5px;
    }
`;

const Product = styled(Login) `
    a{
        text-decoration: none;
        color: #fff;
    }
    a:hover{
        color: #ffd417;
    }
`;