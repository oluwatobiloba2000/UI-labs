import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import Particle from './particle';
import SearchBar from './search-bar';

function Documentation() {
    return (
        <Box>
            {/* top hero header */}
            <Flex
            justifyContent="center"
                background={
                    useColorModeValue("linear-gradient(180deg, rgba(48,27,66,1) 0%,rgba(48,27,66,1) 35%,rgba(31,136,242,1) 250%); background-repeat: no-repeat; background-size: 100%; background-position: 50% 50%",
                    "linear-gradient(180deg, rgb(0 0 0) 0%,#000 35%,rgba(31,136,242,1) 250%)")}
                w="100%" h="340px">
                <Header padding="10px 15px" />
                <Particle />
                <SearchBar/>
            </Flex>

            {/* content */}
            <Flex width="80%"
                minH="60vh"
                position="absolute"
                le="10%"
                boxShadow="0px 0px 10px rgba(0,0,0,0.5)"
                margin="-85px auto" bg={useColorModeValue("#fff", "#0d0e12")}>
                <Sidebar/>

                {/* content */}

            </Flex>
        </Box>
    )
}

export default Documentation;
