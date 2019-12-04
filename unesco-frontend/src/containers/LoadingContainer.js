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
                color={'#FD5C63'}
            />
        </div>

    )
}

export default LoadingContainer