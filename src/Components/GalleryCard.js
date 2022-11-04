import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function GalleryCard(props) {
    const Wrapper = styled.div`
    width: 350px;
    height: 450px;
    background-image: url(${props.image});
    object-fit: fill;
    border-radius: 20px;
    display: flex;
    margin:10px;
    justify-content: center;
    align-items: flex-end;
    `

    const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    border: 5px;
    border-color: black;
    text-align: center;
    color: #FFFFFF;
    padding-bottom: 30px;
    `    
    const navigate = useNavigate();
    return(
        <Wrapper onClick={() => {navigate("/post_test_view")}}>
            <Title>{props.title}</Title>
        </Wrapper>
    )
}

