import styled from "styled-components";
import { useState } from "react";
import { checkCookies, logout, SignIn } from "../Backend/SupaBaseFunctions";
import { Pane, FileUploader, FileCard } from 'evergreen-ui'
import React from "react";
export default function AdminPage() {
    const [title, titleChange] = useState('')
    const [content, contentChange] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("logged_in") === "true" ? true : false)
    const [username, setUsername] = useState('')
    const [login_password, setPassword] = useState('')
    const [files, setFiles] = React.useState([])
    const [fileRejections, setFileRejections] = React.useState([])
    const handleFileChange = React.useCallback((files) => setFiles([files[0]]), [])
    const handleRejected = React.useCallback((fileRejections) => setFileRejections([fileRejections[0]]), [])
    const handleRemove = React.useCallback(() => {
        setFiles([])
        setFileRejections([])
    }, [])
    const handleChange = event => {

        if ((title.length) === 0 || content.length === 0) {
            document.getElementById("alert-title").style = "display:block;"
        } else {
            console.log('value is: ', title);
            console.log('value is: ', content);
            document.getElementById("alert-title").style = "display:none;"
        }
    };

    const handleLogin = async event => {
        if ((username.length) === 0 || (login_password.length) === 0) {
            document.getElementById("login-alert-title").style = "display:block;"
            setIsLoggedIn(false)
        } else if (checkCookies({ username, login_password })) {
            setIsLoggedIn(true);
            document.getElementById("login-alert-title").style = "display:none;"
        }
        else if ((await SignIn({ email: username, password: login_password })) === false) {
            setIsLoggedIn(false);
            document.getElementById("login-alert-title").style = "display:block;"
        } else {
            setIsLoggedIn(true);
            localStorage.setItem("logged_in", true)
            document.getElementById("login-alert-title").style = "display:none;"
        }
    }

    const handleLogout = async event => {
        localStorage.setItem("logged_in", false);
        (await logout());
        setIsLoggedIn(false);
    }

    if (isLoggedIn === true) {
        return (
            <Wrapper>
                <Text>
                    <Title>Admin Panel</Title>
                </Text>
                <AlertTitle id="alert-title">Please Fill Everything in the form.</AlertTitle>

                <InputBox>
                    <SubTitle>Title</SubTitle>
                    <FieldView type="text" placeholder="Title" onChange={event => { titleChange(event.target.value) }} />
                </InputBox>
                <InputBox>
                    <SubTitle>Content</SubTitle>
                    <TextFieldView rows={15} placeholder="Approximately 250 to 300 words recommended." onChange={event => { contentChange(event.target.value) }} />
                </InputBox>
                <InputBox>
                    <SubTitle>Image</SubTitle>
                    <Pane maxWidth={654}>
                        <FileUploader
                            description="You can upload 1 Image.The image can be up to 50 MB."
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
                    </Pane>
                </InputBox>
                <SubmitButton onClick={() => handleChange()}>Submit Content</SubmitButton>
                <LogoutButton id="logout-button" onClick={() => handleLogout()}>Logout</LogoutButton>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <Text>
                    <Title>Login</Title>
                </Text>
                <AlertTitle id="login-alert-title">Login Failed. Wrong Password or Username</AlertTitle>
                <InputBox>
                    <SubTitle>Email</SubTitle>
                    <UsernameFieldView type="text" placeholder="Email" onChange={event => { setUsername(event.target.value) }} />
                </InputBox>
                <InputBox>
                    <SubTitle>Password</SubTitle>
                    <FieldView type="password" placeholder="Password" onChange={event => { setPassword(event.target.value) }} />
                </InputBox>

                <SubmitButton id="login-submit-button" onClick={() => handleLogin()}>Login</SubmitButton>
            </Wrapper>
        )
    };
}

const Wrapper = styled.div`
    margin:0;
    padding:20px 0px;
    max-width:1234px;
    width: 100%;
    margin: auto auto;
    text-align: left;
    justify-content: left;
`
const Text = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    margin: 16px;
    align-self: center;
`
const Title = styled.h1`
    font-size: 96px;
    padding: 0;
    margin: 0;
    @media (max-width:732px) {
        font-size: 64px;
    }
`
const FieldView = styled.input`
    max-width: 410px;
    width: 90%;
    font-size: 18px;
    border-radius: 20px;
    border-width: 2px;
    border-color: black;
    padding: 10px;
`
const UsernameFieldView = styled.input`
    max-width: 410px;
    width: 90%;
    margin-right: 20px;
    font-size: 18px;
    border-radius: 20px;
    border-width: 2px;
    border-color: black;
    padding: 10px;
`
const SubTitle = styled.p`
    font-size: 32px;
    font-weight: 600;
    padding: 0;
    margin: 0;
`
const InputBox = styled.div`
    padding: 20px;
`
const TextFieldView = styled.textarea`
    width: 90%;
    max-width: 750px;
    font-size: 18px;
    border-radius: 20px;
    border-width: 2px;
    border-color: black;
    padding: 16px;
`
const SubmitButton = styled.button`
    border: none;
    padding:  20px 30px;
    background-color: black;
    border-radius: 40px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 20px;
`
const AlertTitle = styled.h1`
    margin: 20px ;
    padding: 20px;
    background: rgba(208, 52, 44, .4);
    border-radius: 20px;
    display: none;
    font-size: 22px;
`

const LogoutButton = styled.button`
    border: none;
    padding:  20px 30px;
    background-color: red;
    border-radius: 40px;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 20px;
`