import React from 'react';
import '../style/css/chat.css'

function MsgUser(props) {

  return (
    <div className="d-flex justify-content-end mb-4">
      <div className="msg_cotainer_send">
        {props.pmsg}
        {/* <span className="msg_time_send">8:55 AM, Today</span> */}
      </div>

    </div>
  )

}

export default MsgUser;