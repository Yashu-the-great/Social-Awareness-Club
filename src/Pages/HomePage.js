import styled from "styled-components"
import css from "./HomePage.css"
import PlantSmallSvg from "../Assets/HeroSectionSvgs/PlantSmall1.svg"
import Stick from "../Assets/HeroSectionSvgs/Stick.svg"
import PlantBigSvg from "../Assets/HeroSectionSvgs/PlantBigSvg.svg"
import Clothes from "../Assets/HeroSectionSvgs/Clothes.svg"
import AboutUs from "../Components/AboutSection"
import GallerySection from "../Components/GallerSection"


export default function HomePage() {
    return (
        <Wrapper style={css}>
            <TopSvgs>
                <Svgs src={PlantSmallSvg} />
                <StickSvg src={Stick} className="stick-svg" />
            </TopSvgs>
            <Text>
                <Title>Social Awareness Club</Title>
                <SubTitle>Spreading Awarness, Locally and Globally</SubTitle>
            </Text>
            <TopSvgs>
                <PlantBigSvgs src={PlantBigSvg} />
                <PlantBigSvgs src={Clothes} />
            </TopSvgs>
            <AboutUs />
            <GallerySection/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin:0;
    padding:20px 0px;
    max-width:1234px;
    width: 100%;
    margin: auto auto;
    text-align: center;
    justify-content: center;
`

const Text = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    gap:30px;
    margin: 16px;
`

const Title = styled.h1`
    font-size: 96px;
    padding: 0;
    margin: 0;
    @media (max-width:732px) {
        font-size: 64px;
    }
`

const SubTitle = styled.p`
    font-style: normal;
    font-weight: 300;
    padding: 0;
    margin: 0;
    font-size: 28px;
    text-align: center;
    color: #000000;
    @media (max-width:732px) {
        font-size: 20px;
    }
`

const TopSvgs = styled.div`
    display: flex;
    padding: 50px;
    align-content:center;
    justify-content: center;
    gap: 200px;
`

const Svgs = styled.img`
    width: 150px;
`

const StickSvg = styled.img`
    width: 137px;
    @media (max-width:752px){
        display: none ;
    }
`

const PlantBigSvgs = styled.img`
    width: 210px;
    @media (max-width:752px){
        display: none ;
    }
`