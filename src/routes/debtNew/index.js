import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserService } from '../../services'
import { updateUserInfo } from '../../state/actions/user'
import SelectFriends from './SelectFriends'
import DebtInfo from './DebtInfo'
import { NavLink } from 'react-router-dom'
import { Box, Button, Flex } from '@chakra-ui/core'

export default function DebtNew() {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [step, setStep] = useState(0)


    const [total, setTotal] = useState(0)
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [creditors, setCreditors] = useState([])

    useEffect(() => {
        if(user) {
            UserService.getUserInfo(user.id, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
    }, [user])



    const renderStep = () => {
        if (user) {
            if (step == 0) setStep(1)
            switch (step) {
                case 1:
                    return <DebtInfo total setTotal={e => setTotal(e)}
                        nextStep={() => setStep(2)}/>
                    break;
                case 2:
                    return <SelectFriends
                        friendlist={user.friends}
                        nextStep={() => setStep(3)}/>
                    break;
                case 3:
                    break;
                default:
                    return 'loading'
                    break;
            }
        }
        
    }

    return (
        <Box>
            <Flex justifyContent="center">
                <Box w={500}>
                    <Box w="100%">
                        <Flex direction="row" justifyContent="space-between">
                            <NavLink to="/"><Button onClick={() => {}}>Home</Button></NavLink>
                            CREATE DEBT
                        </Flex>
                        { renderStep() }


                        <Box>
                            total: {total} <br/>
                            description: {description} <br />
                            creditors: {creditors} <br />
                        </Box>
                    </Box>
                </Box>
            </Flex>
            
        </Box>
    )
}
