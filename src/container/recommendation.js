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
                { this.renderWheel() }
            </div>
        );
    }

    renderWheel() {
        const recommendation = this.state.recommendation;
        const products = recommendation.map((element, pos) => {
            //if (pos < this.state.maxItemsToShow)
                return (
                    <Item key={ element.businessId } item={ element }/>
                );
        });

        return (
            <div>
                <button onClick={ () => { this.scroll(-400); } }>anterior</button>
                <div id="viewport" className="viewport"> { products } </div>
                <button onClick={ () => { this.scroll(400); } }>proximo</button>
            </div>
        );
    }

    // scroll(value) {
    //     const newPos = document.getElementById('viewport').scrollLeft + value;
    //     document.getElementById('viewport').scrollLeft = newPos;
    // }

    scroll(value) {
        let element = document.getElementById('viewport'),
            start = element.scrollLeft,
            change = value,
            currentTime = 0,
            increment = 20,
            duration = 600;
            
        let animateScroll = function() {        
            currentTime += increment;
            let val = smoothScrolling(currentTime, start, change, duration);
            element.scrollLeft = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        
        animateScroll();
    }
    
    
    
}

/*  t = current time
    b = start value
    c = change in value
    d = duration */
function smoothScrolling(t, b, c, d) {
    t /= d/2;
    
    if (t < 1) return c/2*t*t + b;
        t--;

    return -c/2 * (t*(t-2) - 1) + b;
};