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
const ulStyle = {
	listStyle: 'none',
	width: '200px',
	border: '1px solid #ccc',
	display: 'inline-block',
	position: 'absolute'
}

class Notification extends React.PureComponent {
	constructor(props) {
		super(props)
		this.inputTarget = React.createRef(); // 当前输入框节点
		this.bgTarget = React.createRef(); // 当前输入框节点
		this.noticeTarget = React.createRef(); // 当前输入框节点
		this.state = {
			ulStylePosition: {
				left: 0,
				top: 0
			}
		}
	}
	componentDidMount() {
		this.inputTarget.current.addEventListener('input', () => this.onOperating());
		this.inputTarget.current.addEventListener('click', () => this.onOperating());
	}
	// 用户操作 event handle
	onOperating() {
		const currentValue = this.inputTarget.current.value; // textarea value
		const selectionStart = this.inputTarget.current.selectionStart;
		const nearWorld = currentValue.slice(selectionStart-1, selectionStart);
		// 如果为空，或者是空格或回车，则返回
		if(selectionStart < 1 || /\s|\n/.test(nearWorld)) {return ;}
		// 替换 span
		let currentValueArr = currentValue.split('');
		currentValueArr.splice(selectionStart-1, 1, '<span>' + nearWorld + '</span>');
		this.bgTarget.current.innerHTML = currentValueArr.join('').replace(/\n/g, '<br />');
		// 获取 span 位置
		let spanPosition = this.bgTarget.current.getElementsByTagName('span')[0].getBoundingClientRect();
		let noticePosition = this.noticeTarget.current.getBoundingClientRect();
		console.log(spanPosition, noticePosition)
		// 设置 ulStylePosition
		this.setState({
			ulStylePosition: {
				left: spanPosition.x - noticePosition.x + this.state.ulStylePosition.left + 15,
				top: spanPosition.y - noticePosition.y + this.state.ulStylePosition.top + 15
			}
		})
	}
	render() {
		return (<div className="notificationContainer">
	    <textarea ref={this.inputTarget} {...textareaProps}></textarea>
	    <div ref={this.bgTarget} className="notificationBg" style={textareaProps.style}></div>
	  	<ul ref={this.noticeTarget} style={{...ulStyle, left: this.state.ulStylePosition.left + 'px', top: this.state.ulStylePosition.top + 'px'}}>
	  		<li>提示语</li>
	  		<li>提示语</li>
	  	</ul>
	  </div>)
	}
}

Notification.propTypes = {
  notificateWords: PropTypes.array
}

export default Notification
