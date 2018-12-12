/*
 * 路由
 */
import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import AppRoute from './routes/app'
import SmartNotification from './routes/smartNotification'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
	const error = Loadable({
	  loader: () => import('./routes/error'),
	  loading: () => ( <div><h2>loading</h2></div> )
	})
	return (
		<ConnectedRouter history={history}>
			<AppRoute>
				<Switch>
					<Route component={SmartNotification} />
		    </Switch>
			</AppRoute>
		</ConnectedRouter>
	)
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
