import React from 'react'

function Alert(props) { 
  return (
    props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
         {props.alert.msg}:{props.alert.type}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button> 
    </div>
  )
}

export default Alert

