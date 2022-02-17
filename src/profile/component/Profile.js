import React from 'react'
import PropTypes from 'prop-types'


function Profile(props) {
    props.data()
    return (
        <div>
            {props.children} 
            <h1  style={{ color: '#03BFCB' }} onClick={props.data} >{props.name}  </h1>
            <h2 style={{ color: '#FDBA0B' }} > {props.pro} </h2>
            <p > {props.bio}  </p>
        </div>
    )
}
Profile.propTypes={
    name: PropTypes.string,
    pro: PropTypes.string,
    bio: PropTypes.string,
    data: PropTypes.func,
};
Profile.defaultProps = {
    name: "The default name",
    pro: "The default Profession",
    bio: "The default biography",
    data: alert('Default alert'),
}
export default Profile
