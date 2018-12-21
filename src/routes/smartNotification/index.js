import React from 'react'
import Notification from './smartNotification'

const index = () => {
	const notificateWords = ['hello', 'world']

	return (<Notification notificateWords={notificateWords} />)
}

export default index
