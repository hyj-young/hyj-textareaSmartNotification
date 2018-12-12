/**
 *  智能提示组件
 *  要求输入： children 必须为一个 textarea 组件，样式可以自己定
 */
import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.PureComponent {
	constructor(props) {
		super(props)
		this.textarea = null; // 当前输入框节点
	}
	componentDidMount() {
		if(!document.querySelector('textarea')) {return ;}
		this.textarea = document.querySelector('textarea');
		console.log(this.textarea)
	}
	render() {
		return (<React.Fragment>
	    {this.props.children}
	  </React.Fragment>)
	}
}

Notification.propTypes = {
  children: PropTypes.element.isRequired
}

export default Notification
