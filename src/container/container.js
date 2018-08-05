import React from 'react';

import { Reference     } from './reference';
import { Recommendation } from './recommendation';

import './container.css';

export class Container extends React.Component {
    render() {
        return(
            <div className="container">
                <Reference reference={ this.props.data.reference } />
                <Recommendation recommendation={ this.props.data.recommendation } />
            </div>
        );
    }
}