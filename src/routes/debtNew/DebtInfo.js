import { Box, Button, Input } from '@chakra-ui/core'
import React from 'react'

export default function DebtInfo({nextStep, total, setTotal}) {

    return (
        <Box>
            <Box w="100%" mt={50}>
                <Box>
                    Jumlah
                    <Input
                        type="Number"
                        onChange={e => {
                            setTotal(e.target.value)
                        }}
                        />
                </Box>

                <Button onClick={() => nextStep()} float="right" mt={5}>
                    Next
                </Button>
            </Box>
        </Box>
    )
}
