import React from 'react'
import { Button } from 'semantic-ui-react'

const PrimaryButton = ({text, onClick}) => {

        return(
             <Button onClick={onClick} basic color='blue'>
                {text}
            </Button>
        )
}

export default PrimaryButton