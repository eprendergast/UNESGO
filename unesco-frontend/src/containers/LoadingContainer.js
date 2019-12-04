import React from 'react'
import { PropagateLoader } from 'react-spinners'
import { css } from '@emotion/core'

const override = css`
    padding-top: 200px;
`;

const LoadingContainer = () => {
    return (
        <div className="loading-page-content-container">
            < PropagateLoader 
                className='loader'
                css={override}
                sizeUnit={"px"}
                size={15}
                color={'#339999'}
            />
        </div>

    )
}

export default LoadingContainer