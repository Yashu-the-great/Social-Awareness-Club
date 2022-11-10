import styled from 'styled-components';
import ourWork from '../../Assets/ourWork.svg'
import Card from './Card';
import GrpPic from '../../Assets/groupPic.png'
import { GalleryCardModel } from '../../Model';

export default function Gallery({ posts }) {
    posts = posts.map((post) => new GalleryCardModel(post.title, post.content, post.image, post.id, post.created_at));

    if (posts.length == 0) posts.push(
        new GalleryCardModel('', '', null, 1, ''),
        new GalleryCardModel('', '', null, 1, ''),
    );

    return (
        <Wrapper id='posts' name='posts'>
            <Text>
                <Title>Gallery</Title>
                <SubTitle src={ourWork} />
            </Text>
            <CardView>
                {
                    posts.map((val, index) => {
                        return <Card id={val.id} image={val.image} title={val.title} key={index} />
                    })
                }
            </CardView>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: auto auto;
    padding-top: 6vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const Text = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    gap:10px;
    margin: 16px;
`

const Title = styled.h1`
    font-size: 64px;
    @media (max-width: 752px){
        font-size: 44px;
    }
    padding: 0;
    margin: 0;
`
const SubTitle = styled.img`
    padding: 0;
    margin: 0;
    width: 18rem;
    align-self: center;
`

const CardView = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`