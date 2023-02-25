import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'


const WomenNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box className='navbar'>
            <Box  bg={"#ebd3e1"} p={2} gap={2} display={["none", 'none', 'none', 'flex']} className="nav-options">
                <Box>
                    <Button><Link href="#cut"><span>HairCut & Style</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#color"><span>Hair Color</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#spa"><span>Hair Spa</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#treat"><span>Hair Treatment</span></Link></Button>
                </Box>
                <Box>
                    <Button><Link href="#best"><span>Bestsaller</span></Link></Button>
                </Box>
            </Box>
            <Button ref={btnRef} display={["block", 'block', 'block', 'none']} onClick={() => {
                isOpen ? onClose() : onOpen()
            }}>
                {
                    isOpen ? <VscChromeClose /> : <GiHamburgerMenu />
                }
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent className="drawer">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Box display={['flex', 'none']} className='logo'>
                            <Box>
                                <h1>Hair Doc</h1>
                            </Box>
                        </Box>
                    </DrawerHeader>

                    <DrawerBody>
                        <Box><Link href='#cut' onClick={() => onClose()}>HairCut & Style</Link></Box>
                        <Box><Link href='#color' onClick={() => onClose()}>Hair Color</Link></Box>
                        <Box><Link href='#spa' onClick={() => onClose()}>Hair Spa</Link></Box>
                        <Box><Link href='#treat' onClick={() => onClose()}>Hair Treatment</Link></Box>
                        <Box><Link href='#best' onClick={() => onClose()}>Bestsaller</Link></Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default WomenNavbar