import React from 'react'

function Loader(props) {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
        </div>
    )
}

Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader
