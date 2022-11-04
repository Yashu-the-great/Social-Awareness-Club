import styled from "styled-components";
import GrpPic from "../Assets/HeroSectionSvgs/grp_pic.png"
export default function PostView(props) {
    window.scrollTo(0,0)
    return (
        <Wrapper>
            <PictureViewWrapper>
                <PictureView src={GrpPic} />
            </PictureViewWrapper>
            <Text>
                <Title>Title</Title>
                <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Imperdiet proin fermentum leo vel orci porta. Vestibulum sed arcu non odio euismod. Neque gravida in fermentum et sollicitudin. Sed tempus urna et pharetra pharetra massa massa. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Erat imperdiet sed euismod nisi porta lorem. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Tellus cras adipiscing enim eu turpis egestas pretium.

Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nunc id cursus metus aliquam eleifend mi in nulla. Diam maecenas sed enim ut sem viverra. Lobortis mattis aliquam faucibus purus in massa tempor. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed euismod nisi porta lorem mollis aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Sit amet nisl purus in mollis nunc sed id. Feugiat vivamus at augue eget. Dolor sit amet consectetur adipiscing elit.

Fringilla est ullamcorper eget nulla facilisi etiam. Tortor at auctor urna nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Morbi blandit cursus risus at ultrices. Molestie nunc non blandit massa enim. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Scelerisque purus semper eget duis at tellus at. At augue eget arcu dictum varius. Porta nibh venenatis cras sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Aliquet enim tortor at auctor urna nunc id cursus metus. Eu facilisis sed odio morbi quis commodo odio aenean. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Volutpat sed cras ornare arcu dui. Vitae et leo duis ut. Ac auctor augue mauris augue neque gravida.

Quam pellentesque nec nam aliquam sem et. Quisque egestas diam in arcu cursus euismod quis viverra. Auctor urna nunc id cursus metus aliquam eleifend mi. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Mauris augue neque gravida in fermentum et sollicitudin ac. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Mi eget mauris pharetra et ultrices neque ornare. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Neque aliquam vestibulum morbi blandit cursus risus at. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Adipiscing elit ut aliquam purus sit amet.

Et netus et malesuada fames ac turpis egestas maecenas pharetra. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet dictum sit amet justo donec enim diam. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nam aliquam sem et tortor consequat id porta nibh venenatis. Urna et pharetra pharetra massa massa ultricies mi. Mi sit amet mauris commodo quis imperdiet. Sit amet tellus cras adipiscing enim. Vestibulum sed arcu non odio euismod lacinia at quis risus. Cras pulvinar mattis nunc sed blandit. Pellentesque id nibh tortor id aliquet lectus proin. Cras semper auctor neque vitae tempus. Arcu bibendum at varius vel pharetra vel. Dignissim convallis aenean et tortor at risus.
                </SubTitle>
            </Text>
            
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin:0;
    padding:20px 0px;
    max-width:1234px;
    width: 100%;
    margin: auto auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 6vw;
    gap:50px;
`

const Text = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    gap:30px;
    margin: 16px;
`

const Title = styled.h1`
    font-size: 64px;
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
    font-size: 24px;
    text-align: justify;
    color: #000000;
    @media (max-width:732px) {
        font-size: 20px;
    }
`
const PictureViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PictureView = styled.img`
    object-fit: cover;
    width: 90vw;
    max-width: 1200px;
    height: 60vw;
    max-height: 514px;
    border-radius: 20px;
`