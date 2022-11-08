import styled from 'styled-components';
import thisIsUs from '../../Assets/thisIsUs.svg'
import groupPic from '../../Assets/groupPic.png'
export default function AboutUs() {
    return (
        <Wrapper>
            <Text>
                <Title>About Us</Title>
                <SubTitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</SubTitle>
            </Text>

            <GroupPic>
                <TisUs src={thisIsUs} />
                <Grp_pic src={groupPic} />
            </GroupPic>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    max-width: 1097px;
    margin: auto auto;
    padding-top: 6vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Title = styled.h1`
    font-size: 64px;
    @media (max-width: 752px){
        font-size: 44px;
    }
    padding: 0;
    margin: 0;
`

const Text = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-left: 20px;
    padding-right: 20px ;
`

const SubTitle = styled.p`
    font-size: 24px;
    @media (max-width: 752px){
        font-size: 18px;
    }
    padding: 0;
    margin: 0;
`

const GroupPic = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Grp_pic = styled.img`
    object-fit: cover;
    width: 90vw;
    max-width: 800px;
    height: 60vw;
    max-height: 514px;
    border-radius: 20px;
`

const TisUs = styled.img`
    align-self: flex-end;
    padding: 0px 30px;
    @media (max-width: 752px){
        width: 170px;
    }
`