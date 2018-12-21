/**
 *  智能提示组件
 *  要求输入： children 必须为一个 textarea 组件，样式可以自己定
 */
import React from 'react'
import PropTypes from 'prop-types'
import './smartNotification.less'

const config = {
	tagName: 'textarea'
}
const textareaProps = {
	style: {
    border: '1px solid #ccc',
    width: '400px',
    height: '200px',
    overflowY: 'auto'
	}
}

class Notification extends React.PureComponent {
	constructor(props) {
		super(props)
		this.inputTarget = React.createRef(); // 当前输入框节点
		this.bgTarget = React.createRef(); // 当前输入框节点
	}
	componentDidMount() {
		this.inputTarget.current.addEventListener('input', () => this.onOperating());
		this.inputTarget.current.addEventListener('click', () => this.onOperating());
	}
	// 用户操作 event handle
	onOperating() {
		console.log(this.inputTarget.current, this.inputTarget.current.selectionStart);
		this.bgTarget.current.innerHTML = this.inputTarget.current.value.replace(/\n/g, '<br />');
	}
	render() {
		return (<div className="notificationContainer">
	    <textarea ref={this.inputTarget} {...textareaProps}></textarea>
	    <div ref={this.bgTarget} className="notificationBg" style={textareaProps.style}></div>
	  </div>)
	}
}

Notification.propTypes = {
  notificateWords: PropTypes.array
}

export default Notification
