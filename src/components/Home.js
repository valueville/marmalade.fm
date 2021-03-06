import React from 'react';
import {connect} from 'react-redux';
import Mix from './Mix';

const Home = ({mixes, ...props}) => (
	<div className="flex flex-wrap justify-between mixes ph3 ph4-l mb5">
		{mixes.slice(0, 6).map(mix => (
			<div className="mix mb4" key={mix.key}>
				<Mix {...props} {...mix} />
			</div>
		))}
	</div>
);

export default connect(state => state)(Home);
