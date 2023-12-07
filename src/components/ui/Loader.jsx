import React from 'react'
import { Dna } from 'react-loader-spinner'
export default function Loader() {
    return (
        <div className='Loader__container'>
            <div className="Loader__container-content">
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        </div>
    )
}
