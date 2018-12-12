import React from 'react'
import Notification from './smartNotification'

const index = () => {
	const textareaProps = {
		rows: '4',
		cols: '30',
		style: {
			margin: '10px auto 0',
    	display: 'block'
		}
	}
	return (<Notification>
    <textarea {...textareaProps}></textarea>
  </Notification>)
}

export default index
