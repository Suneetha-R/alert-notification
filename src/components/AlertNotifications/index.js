/* eslint-disable import/no-named-as-default */
// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
// eslint-disable-next-line import/no-named-as-default-member
import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alert-notification-container">
        <h1 className="heading">Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle className="success-icon" />
          <div>
            <h1 className="success">Success</h1>
            <p>You can access all the files in the folder</p>
          </div>
        </Notification>
        <Notification>
          <RiErrorWarningFill className="error icon" />
          <div className="message-container">
            <h1 className=" message-heading error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <MdWarning className="warning icon" />
          <div className="message-container">
            <h1 className="message-heading warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <MdInfo className="info icon" />
          <div className="message-container">
            <h1 className="message-heading info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
