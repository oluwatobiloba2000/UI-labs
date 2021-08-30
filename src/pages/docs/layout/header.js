import { Box, Flex, HStack, IconButton, Link } from '@chakra-ui/react';
import React from 'react'
import Logo from '../logo';
import { Link as ReactRouterLink } from "react-router-dom"
import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher';
import { BiLinkExternal } from 'react-icons/bi';
import {AiFillGithub} from 'react-icons/ai';

function Header(props) {
    return (
        <Box {...props} as="header" position="absolute" w="100%" color="white">
            <Flex as="nav" justifyContent="space-between">
                <Logo />

                <Flex>
                    <HStack spacing="24px">
                        <Link as={ReactRouterLink} to="/docs">
                            Documentation
                        </Link>

                        <Link width="70px"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-around" href="https://chakra-ui.com" isExternal>
                            Learn <BiLinkExternal mx="2px" />
                        </Link>
                    </HStack>
                </Flex>

                <Flex>
                  <IconButton fontSize="28px" bg="initial" aria-label="github" size="md" variant="ghost" icon={<AiFillGithub />} />
                    <ColorModeSwitcher />
                </Flex>
            </Flex>


        </Box>
    )
}

export default Header;
