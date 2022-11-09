import styled from 'styled-components';
import { useState, useCallback } from 'react';
import { Text, Input, Spacer, Card, Grid, Textarea, Button } from '@nextui-org/react';
import { FileUploader, FileCard } from 'evergreen-ui';
import { Navigate } from 'react-router-dom';

export default function AdminPage({ session }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [files, setFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);

    const handleFileChange = useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);

    const handleRemove = useCallback(() => {
        setFiles([])
        setFileRejections([])
    }, []);

    return !session ? <Navigate to='.   /login' /> : (
        <Wrapper>
            <Text h2 css={{
                dflex: 'center'
            }}>Admin Panel</Text>
            <Spacer y={2} />
            <Card>
                <Card.Header>
                    <Spacer x={0.7} />
                    <Text h3>New Post</Text>
                </Card.Header>
                <Card.Body>
                    <Grid.Container gap={2} alignItems='center' justify='center'>
                        <Grid xs={8}>
                            <div style={{
                                width: '100%'
                            }}>
                                <Input
                                    clearable
                                    color='primary'
                                    type='text'
                                    bordered
                                    labelPlaceholder='Title'
                                    onChange={(event) => setTitle(event.target.value)}
                                    width='100%'
                                />
                                <Spacer y={1} />
                                <Textarea
                                    clearable
                                    color='secondary'
                                    type='text'
                                    bordered
                                    labelPlaceholder='Content'
                                    onChange={(event) => setContent(event.target.value)}
                                    width='100%'
                                    minRows={6}
                                />
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <Spacer x={1} />
                            <FileUploader
                                width='100%'
                                description='You can upload 1 Image.The image can be up to 50 MB.'
                                maxSizeInBytes={50 * 1024 ** 2}
                                maxFiles={1}
                                onChange={handleFileChange}
                                onRejected={handleRejected}
                                renderFile={(file) => {
                                    const { name, size, type } = file
                                    const fileRejection = fileRejections.find((fileRejection) => fileRejection.file === file)
                                    const { message } = fileRejection || {}
                                    return (
                                        <FileCard
                                            key={name}
                                            isInvalid={fileRejection != null}
                                            name={name}
                                            onRemove={handleRemove}
                                            sizeInBytes={size}
                                            type={type}
                                            validationMessage={message}
                                        />
                                    )
                                }}
                                values={files}
                            />
                        </Grid>
                        <Grid xs={12}>
                            <Spacer y={2} />
                            <Button color='success' onPress={() => submit()}>Submit</Button>
                        </Grid>
                    </Grid.Container>
                </Card.Body>
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