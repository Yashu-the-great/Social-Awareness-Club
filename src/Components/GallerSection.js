import styled from "styled-components";
import our_work from "../Assets/HeroSectionSvgs/our_work.svg"
import GalleryCard from "./GalleryCard";
import GrpPic from "../Assets/HeroSectionSvgs/grp_pic.png"
import { GalleryCardModel } from "../Backend/Models";
export default function GallerySection() {

    const posts = [
        new GalleryCardModel("Title1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate. Mattis enim ut tellus elementum sagittis vitae et leo duis. Id venenatis a condimentum vitae. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Morbi tincidunt augue interdum velit euismod. Lectus vestibulum mattis ullamcorper velit sed. Proin fermentum leo vel orci porta non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac turpis egestas maecenas pharetra convallis. Risus nec feugiat in fermentum posuere urna nec. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Varius sit amet mattis vulputate enim. Quam quisque id diam vel quam. Blandit cursus risus at ultrices mi tempus imperdiet.",GrpPic, 1, "something"),
        new GalleryCardModel("Title1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate. Mattis enim ut tellus elementum sagittis vitae et leo duis. Id venenatis a condimentum vitae. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Morbi tincidunt augue interdum velit euismod. Lectus vestibulum mattis ullamcorper velit sed. Proin fermentum leo vel orci porta non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac turpis egestas maecenas pharetra convallis. Risus nec feugiat in fermentum posuere urna nec. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Varius sit amet mattis vulputate enim. Quam quisque id diam vel quam. Blandit cursus risus at ultrices mi tempus imperdiet.",GrpPic, 1, "something"),
        new GalleryCardModel("Titl", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate. Mattis enim ut tellus elementum sagittis vitae et leo duis. Id venenatis a condimentum vitae. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Morbi tincidunt augue interdum velit euismod. Lectus vestibulum mattis ullamcorper velit sed. Proin fermentum leo vel orci porta non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac turpis egestas maecenas pharetra convallis. Risus nec feugiat in fermentum posuere urna nec. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Varius sit amet mattis vulputate enim. Quam quisque id diam vel quam. Blandit cursus risus at ultrices mi tempus imperdiet.",GrpPic, 1, "something"),
        new GalleryCardModel("Title1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate. Mattis enim ut tellus elementum sagittis vitae et leo duis. Id venenatis a condimentum vitae. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Morbi tincidunt augue interdum velit euismod. Lectus vestibulum mattis ullamcorper velit sed. Proin fermentum leo vel orci porta non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Ac turpis egestas maecenas pharetra convallis. Risus nec feugiat in fermentum posuere urna nec. Pellentesque dignissim enim sit amet venenatis urna cursus eget. Varius sit amet mattis vulputate enim. Quam quisque id diam vel quam. Blandit cursus risus at ultrices mi tempus imperdiet.",GrpPic, 1, "something"),
    ]

    return (
        <Wrapper>
            <Text>
                <Title>Gallery</Title>
                <SubTitle src={our_work} />
            </Text>
            <CardView>
                {
                    posts.map((val, index) => {
                       return  <GalleryCard image={val.image} title={val.title}/>
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