import { Box, Button, ButtonGroup, Flex, Input } from '@chakra-ui/core'
import React, { useState } from 'react'

export default function SelectFriends({friendlist,nextStep}) {

    const [inputFriend, setInputFriend] = useState("")

    const searchFriend = () => {

    }

    return (
        <Box>
            <Box w="100%" mt={50}>
                <Box>
                    <Flex direction="row" justifyContent="space-between">
                        <Input
                            placeholder="Search friends"
                            onChange={e => {
                                setInputFriend(e.target.value)
                            }}/>
                        <Button onClick={() => searchFriend()}>SEARCH</Button>
                    </Flex>
                    
                </Box>

                <Button onClick={() => nextStep()} float="right" mt={5}>
                    Next
                </Button>
            </Box>
        </Box>
    )
}
