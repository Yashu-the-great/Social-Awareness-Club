import { useEffect, useState } from 'react';
import { supabase } from '../../supabase';
import styled from 'styled-components';
import plantSmall from '../../Assets/plantSmall.svg';
import stick from '../../Assets/stick.svg';
import plantBigSvg from '../../Assets/plantBig.svg';
import clothes from '../../Assets/clothes.svg';
import About from '../../Components/About/About';
import Gallery from '../../Components/Gallery/Gallery';
import Dots from '../../Assets/Dots.svg';
import './Home.css';

export default function Home() {
    const [posts, setPosts] = useState([{}, {}]);

    useEffect(() => {
        supabase.from('posts').select().then((data) => setPosts(data.data))
    }, []);

    return (
        <Wrapper name='home' id='home'>
            <TopSvgs>
                <Svgs src={plantSmall} />
                <StickSvg src={stick} className='stick-svg' />
            </TopSvgs>
            {<LeftDesign src={Dots} />}
            <RightDesign src={Dots} />
            <Text>
                <Title>Social Awareness Club</Title>
                <SubTitle>Spreading Awarness, Locally and Globally</SubTitle>
            </Text>
            <TopSvgs>
                <PlantBigSvgs src={plantBigSvg} />
                <PlantBigSvgs src={clothes} />
            </TopSvgs>
            <About />
            <Gallery posts={posts} />
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
    z-index: 1;
`

const Title = styled.h1`
    font-size: 96px;
    padding: 0;
    margin: 0;
    z-index: 1;
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
    position: relative;
    width: 137px;
    @media (max-width:752px){
        display: none;
    }
`

const PlantBigSvgs = styled.img`
    width: 210px;
    @media (max-width:752px){
        display: none;
    }
`

const LeftDesign = styled.img`
    aspect-ratio: 1;
    width: 27.5rem;
    position: absolute;
    left: -14.5rem;
    top: 5rem;
    margin: 0;
    filter: opacity(0.75);
    transform: rotate(0deg);
`

const RightDesign = styled.img`
    aspect-ratio: 1;
    width: 27.5rem;
    position: absolute;
    right: -14.5rem;
    top: 5rem;
    margin: 0;
    filter: opacity(0.75);
    transform: rotate(90deg);
`