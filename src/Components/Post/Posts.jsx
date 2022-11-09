import { useEffect, useState } from 'react';
import { Text, Link as NextLink } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import groupPic from '../../Assets/groupPic.png';

import Markdown from 'react-markdown';

export default function Post(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const content = `*Lorem* ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Imperdiet proin fermentum leo vel orci porta. Vestibulum sed arcu non odio euismod. Neque gravida in fermentum et sollicitudin. Sed tempus urna et pharetra pharetra massa massa. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Erat imperdiet sed euismod nisi porta lorem. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Tellus cras adipiscing enim eu turpis egestas pretium.
                        Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Nunc id cursus metus aliquam eleifend mi in nulla. Diam maecenas sed enim ut sem viverra. Lobortis mattis aliquam faucibus purus in massa tempor. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Sed euismod nisi porta lorem mollis aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Sit amet nisl purus in mollis nunc sed id. Feugiat vivamus at augue eget. Dolor sit amet consectetur adipiscing elit.
                        Fringilla est ullamcorper eget nulla facilisi etiam. Tortor at auctor urna nunc. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Morbi blandit cursus risus at ultrices. Molestie nunc non blandit massa enim. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Scelerisque purus semper eget duis at tellus at. At augue eget arcu dictum varius. Porta nibh venenatis cras sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Aliquet enim tortor at auctor urna nunc id cursus metus. Eu facilisis sed odio morbi quis commodo odio aenean. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Volutpat sed cras ornare arcu dui. Vitae et leo duis ut. Ac auctor augue mauris augue neque gravida.
                        Quam pellentesque nec nam aliquam sem et. Quisque egestas diam in arcu cursus euismod quis viverra. Auctor urna nunc id cursus metus aliquam eleifend mi. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Mauris augue neque gravida in fermentum et sollicitudin ac. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Mi eget mauris pharetra et ultrices neque ornare. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Neque aliquam vestibulum morbi blandit cursus risus at. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Adipiscing elit ut aliquam purus sit amet.
                        Et netus et malesuada fames ac turpis egestas maecenas pharetra. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Sit amet dictum sit amet justo donec enim diam. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Nam aliquam sem et tortor consequat id porta nibh venenatis. Urna et pharetra pharetra massa massa ultricies mi. Mi sit amet mauris commodo quis imperdiet. Sit amet tellus cras adipiscing enim. Vestibulum sed arcu non odio euismod lacinia at quis risus. Cras pulvinar mattis nunc sed blandit. Pellentesque id nibh tortor id aliquet lectus proin. Cras semper auctor neque vitae tempus. Arcu bibendum at varius vel pharetra vel. Dignissim convallis aenean et tortor at risus.`;

    return (
        <Wrapper>
            <NextLink onPress={() => navigate(-1)} style={{
                marginTop: '-8vh'
            }}>← Go Back</NextLink>

            <PictureViewWrapper>
                <PictureView src={groupPic} />
            </PictureViewWrapper>
            <div style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
                gap: 30,
                margin: 16
            }}>
                <Text h2>Title</Text>
                <Markdown className='postText' children={content} components={{
                    p: ({ children }) => <Text size='1.2rem'>{children}</Text>,
                }} />
            </div>

        </Wrapper >
    );
}

const Wrapper = styled.div`
    margin:0;
    padding: 20px 0px;
    max-width:1234px;
    width: 100%;
    margin: auto auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-top: 6vw;
    gap:50px;
`
const PictureViewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PictureView = styled.img`
    object-fit: cover;
    width: 80vw;
    height: 40vw;
    max-width: 1200px;
    max-height: 50vh;
    border-radius: 20px;
`