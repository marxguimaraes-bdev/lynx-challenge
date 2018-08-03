import React from 'react';

import { Item   } from './item/item';
import { Header } from './header/header';

export class Recommendation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recommendation: props.recommendation,
            maxItemsToShow: 3,
        };
    }

    render() {
        return (
            <div className="recommendation">
                <Header title="e talvez se interesse por:"/>
                <button onClick={ () => { this.back(); } }>anterior</button>
                { this.renderWheel() }
                <button onClick={ () => { this.forward(); } }>proximo</button>
            </div>
        );
    }

    renderWheel() {
        const recommendation = this.state.recommendation;
        const products = recommendation.map((element, pos) => {
            if (pos < this.state.maxItemsToShow)
                return (
                    <li key={element.businessId}>
                        <Item item={ element }/>
                    </li>
                );
            
                return null;
        });

        return (
            <ol>{ products }</ol>
        );
    }

    back() {
        const recommendation = this.state.recommendation.slice();

        const last = recommendation.pop();
        this.setState({
            recommendation: [last].concat(recommendation),
        })
    }

    forward() {
        const recommendation = this.state.recommendation.slice();

        const first = recommendation.shift();
        this.setState({
            recommendation: recommendation.concat([first]),
        })
    }


}