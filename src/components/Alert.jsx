import React from 'react'

export default function Alert(props) {
  return (
    // if props.alert is true then only the statement will be evaluated or else it will be consodered false
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.msg}
        </div>
    )
}
