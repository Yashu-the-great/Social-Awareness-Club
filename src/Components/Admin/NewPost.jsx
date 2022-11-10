import { useState, useCallback, useEffect } from 'react';
import { Text, Input, Spacer, Card, Grid, Textarea, Button } from '@nextui-org/react';
import { FileUploader, FileCard } from 'evergreen-ui';
import { supabase } from '../../supabase';

export default function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [files, setFiles] = useState([]);
    const [fileRejections, setFileRejections] = useState([]);
    const [ready, setReady] = useState(false);

    const handleFileChange = useCallback((files) => setFiles([files[0]]), []);
    const handleRejected = useCallback((fileRejections) => setFileRejections([fileRejections[0]]), []);

    const handleRemove = useCallback(() => {
        setFiles([])
        setFileRejections([])
    }, []);

    useEffect(() => {
        if (title.length && content.length && files.length && !fileRejections.length) setReady(true);
        else if (ready === true) setReady(false);
    }, [title, content, files])

    const submit = async () => {
        setReady(false);

        const name = Math.floor(Math.random() * 10000000).toString(36);
        {
            const { error } = await supabase.storage
                .from('images')
                .upload(name, files[0], {
                    cacheControl: '3600',
                    upsert: true,
                });
            if (error) return alert(error.message);
        }

        const image = supabase.storage.from('images').getPublicUrl(name).publicURL;
        console.log(image);

        {
            const { error } = await supabase
                .from('posts')
                .insert({
                    title,
                    content,
                    image
                });
            if (error) return alert(error.message);
        }

        alert('Uploaded Post');
        setReady(true);
    };

    return (
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
                        <Spacer y={2} />
                        <Textarea
                            clearable
                            color='secondary'
                            type='text'
                            helperColor='secondary'
                            helperText='Markdown is supported.'
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
                    <div>
                        <Text h4>Image</Text>
                        <FileUploader
                            width='100%'
                            description='You can upload 1 image of up to 50 MB.'
                            maxSizeInBytes={50 * 1024 ** 2}
                            maxFiles={1}
                            acceptedMimeTypes={['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml', 'image/tiff', 'image/webp']}
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
                    </div>
                </Grid>
                <Grid xs={12}>
                    <Spacer y={2} />
                    <Button disabled={!ready} color='success' onPress={() => submit()}>Submit</Button>
                </Grid>
            </Grid.Container>
        </Card.Body>
    )
}