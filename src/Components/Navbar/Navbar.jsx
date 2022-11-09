import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Navbar as NextNavbar, Text, Dropdown, Avatar } from '@nextui-org/react';
import { supabase } from '../../supabase';

function Navbar({ session }) {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <NextNavbar isBordered variant='sticky' shouldHideOnScroll>
            <NextNavbar.Brand>
                <Link to='/'>
                    <Text h3 b color='inherit'>
                        Social Awareness Club
                    </Text>
                </Link>
            </NextNavbar.Brand>
            <NextNavbar.Content activeColor='success' variant='underline-rounded' enableCursorHighlight>
                <NextNavbar.Link href='/#' isActive={location.pathname === '/' && (location.hash ? location.hash === '#' : true)}>&nbsp;&nbsp; Home &nbsp;&nbsp;</NextNavbar.Link>
                <NextNavbar.Link href='/#posts' isActive={location.hash === '#posts'}>&nbsp;&nbsp; Posts &nbsp;&nbsp;</NextNavbar.Link>
            </NextNavbar.Content>
            {
                session ? <NextNavbar.Content>
                    <Dropdown placement="bottom-right">
                        <NextNavbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="div"
                                    color="success"
                                    size="md"
                                    src={
                                        `https://ui-avatars.com/api/?name=${encodeURIComponent(session.user.user_metadata.username || session.user.email.split('@')[0])}&rounded=true&background=random&size=128`
                                    }
                                />
                            </Dropdown.Trigger>
                        </NextNavbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="secondary"
                            onAction={(actionKey) => {
                                if (actionKey === 'logout') {
                                    supabase.auth.signOut();
                                }
                            }}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    {
                                        session.user.email
                                    }
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider color="error">
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </NextNavbar.Content> : null
            }
        </NextNavbar >
    );
}

export default Navbar;