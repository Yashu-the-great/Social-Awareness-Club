import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar as NextNavbar, Text } from '@nextui-org/react';

function Navbar() {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <NextNavbar variant={'floating'}>
            <NextNavbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    AWDnahgdwuawguy
                </Text>
            </NextNavbar.Brand>
        </NextNavbar>
    );
}

export default Navbar;