import React from 'react';

import './item.css';

export function Item(props) {
    return (
        <div className="item">
            { renderImage() }
            { renderName() }
            { renderOldPrice() }
            <div className="price">
                { renderPrice() }
                { renderPaymentConditions() }
                <div>sem juros</div>
            </div>
        </div>
    );
    
    function renderImage() {
        return (
            <img className="item-image" src={ props.item.imageName } alt={ props.item.name } />
        );
    }
    
    function renderName() {
        return (
            <div className="item-name ellipsis"><span> { props.item.name } </span></div>
        );
    }
    
    function renderOldPrice() {
        if (props.item.oldPrice)
            return (
                <div className="item-old-price">De: <span> { props.item.oldPrice } </span></div>
            )
        
        return null;
    }
    
    function renderPrice() {
        return (
            <div className="item-price">Por: <span> { props.item.price } </span></div>
        );
    }
    
    function renderPaymentConditions() {
        return (
            <div className="item-payment-conditions">  { removeMarkups(props.item.productInfo.paymentConditions) } </div>
        );
    }
}



function removeMarkups(str) {
    const reg = /<\/?.*?>/g;
    return str.replace(reg, '');
}