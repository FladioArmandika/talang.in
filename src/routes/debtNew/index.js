import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { UserService } from '../../services'
import { updateUserInfo } from '../../state/actions/user'
import SelectFriends from './SelectFriends'
import DebtInfo from './DebtInfo'
import { Button } from '../../components'
import { NavLink } from 'react-router-dom'

export default function DebtNew() {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const [step, setStep] = useState(0)

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
                    return <DebtInfo
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
        <div>
            <NavLink to="/"><Button onClick={() => {}}>Home</Button></NavLink>
            debt
            { renderStep() }
        </div>
    )
}
