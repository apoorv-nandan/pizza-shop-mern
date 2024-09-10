import React from 'react';

export default function Succes({ success }) {
    return (
        <div className="alert alert-success" role="alert">
            {success}
        </div>

    )
}