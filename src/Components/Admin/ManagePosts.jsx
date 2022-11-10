import { useEffect, useState } from 'react';
import { Button, Card, Table, Text, useCollator, Grid, Spacer } from '@nextui-org/react';
import { supabase } from '../../supabase';

export default function ManagePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const refreshPosts = () => {
        supabase.from('posts').select().then((data) => {
            setPosts(data.data);
            setLoading(false);
        });
    }

    useEffect(() => {
        refreshPosts();
    }, []);

    return (
        <Card.Body>
            <div>
                <Button size='sm' color='primary' flat css={{ ml: '0.8rem' }} onPress={() => {
                    setLoading(true);
                    refreshPosts();
                }}>
                    Refresh Posts
                </Button>
            </div>
            {
                loading ? (
                    <>
                        <Spacer y={2} />
                        <div className='skeleton-loader' style={{ height: '12rem' }}></div>
                    </>
                ) : <Table
                    aria-label='Table with all posts.'
                    css={{
                        height: 'auto',
                        width: '100%',
                    }}
                >
                    <Table.Header>
                        <Table.Column width='20%' allowsSorting>Id</Table.Column>
                        <Table.Column width='30%' allowsSorting >Title</Table.Column>
                        <Table.Column width='20%' allowsSorting >Created At</Table.Column>
                        <Table.Column width='30%'>Actions</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            posts.map((post) =>
                                <Table.Row key={post.id}>
                                    <Table.Cell className='skeleton-loader'>
                                        <Text>
                                            {post.id}
                                        </Text>
                                    </Table.Cell>
                                    <Table.Cell className='skeleton-loader'>
                                        <Text>
                                            {post.title}
                                        </Text>
                                    </Table.Cell>
                                    <Table.Cell className='skeleton-loader'>
                                        <Text>
                                            {post.created_at}
                                        </Text>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {post.loading ? null :
                                            <Grid.Container>
                                                <Grid>
                                                    <Button size='sm' color='secondary' rounded flat>
                                                        Edit
                                                    </Button>
                                                </Grid>
                                                <Grid>
                                                    <Button size='sm' color='error' rounded flat onPress={async (event) => {
                                                        if (event.target.textContent !== 'Click Again To Confirm') {
                                                            return event.target.textContent = 'Click Again To Confirm';
                                                        }
                                                        const { error } = await supabase
                                                            .from('posts')
                                                            .delete()
                                                            .eq('id', post.id);
                                                        if (error) return alert(error.message);
                                                        setPosts((posts) => posts.filter((p) => p.id !== post.id));
                                                    }}>
                                                        Delete
                                                    </Button>
                                                </Grid>
                                            </Grid.Container>
                                        }
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                    <Table.Pagination
                        shadow
                        noMargin
                        align="center"
                        rowsPerPage={5}
                    />
                </Table>
            }
        </Card.Body>
    );
}