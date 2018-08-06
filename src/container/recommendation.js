import React from 'react';

import { library                      } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon              } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight    } from '@fortawesome/free-solid-svg-icons';

import { Item   } from './item/item';
import { Header } from './header/header';

export class Recommendation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recommendation: props.recommendation,
            maxItemsToShow: 3,
            backButtonDisabled: true,
            forwardButtonDisabled: false,
        };

        library.add(faAngleLeft);
        library.add(faAngleRight);
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
            return (
                <Item key={ element.businessId } item={ element }/>
            );
        });

        return (
            <div>
                <div className="wrapper">
                    <div className="button-wrapper">
                        <button className="scroller"
                            disabled={ this.state.backButtonDisabled }
                            onClick={ () => { this.scroll(-400); } }>
                            <FontAwesomeIcon icon="angle-left" />
                        </button>
                    </div>
                    <div id="viewport" className="viewport"> { products } </div>
                    <div className="button-wrapper">
                        <button className="scroller"
                            disabled={ this.state.forwardButtonDisabled }
                            onClick={ () => { this.scroll(400); } }>
                            <FontAwesomeIcon icon="angle-right" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    scroll(value) {
        let element = document.getElementById('viewport'),
            start = element.scrollLeft,
            change = value,
            currentTime = 0,
            increment = 20,
            duration = 600;

        let animateScroll = () => {        
            currentTime += increment;
            let val = smoothScrolling(currentTime, start, change, duration);

            element.scrollLeft = val;

            this.setState({
                backButtonDisabled: element.scrollLeft <= 0,
                forwardButtonDisabled: element.scrollLeft + element.clientWidth >= element.scrollWidth,
            });

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