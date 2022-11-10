import styled from 'styled-components';
import { Text, Spacer, Card, Collapse } from '@nextui-org/react';
import { Navigate } from 'react-router-dom';
import NewPost from './NewPost';
import ManagePosts from './ManagePosts';

export default function AdminPage({ session }) {
    return !session ? <Navigate to='./login' /> : (
        <Wrapper>
            <Text h2 css={{
                dflex: 'center'
            }}>Admin Panel</Text>
            <Spacer y={2} />
            <Card>
                <Collapse.Group>
                    <Collapse title="New Post">
                        <NewPost />
                    </Collapse>
                    <Collapse title="Edit Posts">
                        <ManagePosts />
                    </Collapse>
                </Collapse.Group>
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 89vh;
    text-align: left;
    padding: 2rem;
    justify-content: left;
    background: linear-gradient(105deg, hsla(58, 100%, 78%, 1) 0%, hsla(128, 82%, 78%, 1) 100%);
`