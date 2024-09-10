import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Loading(){
    return(
        <div className='m-5'>
            <Spinner animation="border" />
        </div>
        
    )
}