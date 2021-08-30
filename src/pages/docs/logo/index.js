import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from "react-router-dom"

function Logo() {
    return (
        <Flex>
            <Link as={ReactRouterLink}>
                <Text fontSize="30px" fontWeight="bold"  bgGradient="linear(to-l, #cdc4d7, #ff9800)" bgClip="text">UI Labs</Text>
            </Link>
        </Flex>
    )
}

export default Logo;
