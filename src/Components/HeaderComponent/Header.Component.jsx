import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const HeaderComponent = ({login}) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <div className="logo">
                <img
                    src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
                    alt="Internet connection not found!"/>
            </div>
            <button onClick={() => navigate(login ? '/login' : '/signup')}>
                {login ? 'Login' : 'Sign Up'}
            </button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;

  .logo {
    img {
      height: 3rem;
      cursor: pointer;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border:none;
    cursor: pointer;
    color: #fff;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`

export default HeaderComponent;
