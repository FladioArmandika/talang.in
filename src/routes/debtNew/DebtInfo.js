import React from 'react'
import { Button } from '../../components'

export default function DebtInfo({nextStep}) {
    return (
        <div>
            Debt Info
            <Button onClick={() => nextStep()}>
                Next
            </Button>
        </div>
    )
}
