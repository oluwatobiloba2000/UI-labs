import { Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
    return (
        <Button position="absolute"
            role="search"
            aria-label="search the docs"
            display="flex"
            bg="#2d3748"
            justifyContent="start"
            height="50px"
            fontSize="20px"
            borderRadius="10px"
            color="#cbd5e0"
            border="2px solid #fa9c1575"
            top="120px"
            margin="0px auto"
            width="60%" cursor="pointer"
            _active={{
                backgroundColor: "#242b38"
            }}
            _hover={{
                backgroundColor: "#242b38"
            }}>
            <Icon fontSize="25px" marginRight="10px" as={AiOutlineSearch} color="gray.300" />
            <Text>Search for something</Text>
        </Button>
    )
}

export default SearchBar;
