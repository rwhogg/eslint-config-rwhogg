import React from "react"
import PropTypes from "prop-types"


function MyDummyComponent(props) {
    return(
        <div className="myClass">
            I am a React component named ${props.name}
        </div>
    )
}

MyDummyComponent.propTypes = {
    name: PropTypes.string.isRequired,
}
