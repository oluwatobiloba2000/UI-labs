import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

function Sidebar() {
    return (
        <Flex flexDirection="column" w="250px" p="35px 5px" bg={useColorModeValue("#8080801f", "#8080801c")}>
            <Text as="h2" textAlign="center" fontWeight="bold" fontSize="20px">Getting Started</Text>
        </Flex>
    )
}

export default Sidebar;
