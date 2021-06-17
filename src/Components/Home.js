import styled from 'styled-components';

const Home = () => {
    const googleLog = () => {
        console.log("clicked");
    }
    return(
        <ShopBack>
            <HomeContent>
                <Title>Welcome Our Online Store</Title>
                <Login>Login</Login>
                <LogBtn onClick={googleLog}>Google</LogBtn>
            </HomeContent>
        </ShopBack>
    );
}
export default Home;

const ShopBack = styled.div`
    background-image: url('img/home.jpg');
    width: 100%;
    height: calc(100vh - 50px);
    opacity: 0.8;
`;
const HomeContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Title = styled.h1`
    letter-spacing: 0.8px;
    text-align: center;
    color: #fff;
`;
const Login = styled.p`
    text-align: center;
    font-weight: 500px;
    font-size: 18px;
    letter-spacing: 1px;
    color: #fff;
`;
const LogBtn = styled.button`
    display: block;
    margin: auto;
    width: 120px;
    border: 1px solid #fff;
    border-radius: 10px;
    font-weight: bold;
    background: transparent;
    color: #fff;
`;