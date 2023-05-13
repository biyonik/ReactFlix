import styled from 'styled-components';

const BackgroundImageComponent = () => {
    return (
        <BackgroundContainer>
            <img
                src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg"
                 alt="Internet connection not found!"
            />
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    img {
        height: 100vh;
        width: 100vw;
    }
`

export default BackgroundImageComponent;
