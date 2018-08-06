import React from 'react';

import './item.css';

export function Item(props) {
    return (
        <a href={props.item.detailUrl}>
            <div className="item" onMouseOver={ () => { outLineImg(props.item.businessId) } } onMouseLeave={ () => { undoOutline(props.item.businessId) }} >
                { renderImage() }
                { renderName() }
                { renderOldPrice() }
                <div className="price">
                    { renderPrice() }
                    { renderPaymentConditions() }
                    <div>sem juros</div>
                </div>
            </div>
        </a>
    );
    
    function renderImage() {
        return (
            <img id={ props.item.businessId } className="item-image" src={ props.item.imageName } alt={ props.item.name } />
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

    function outLineImg(id) {
        let element = document.getElementById(id);
        element.style.border = '2px #4776b9 solid';
    }

    function undoOutline(id) {
        let element = document.getElementById(id);
        element.style.border = '2px transparent solid';
    }
}

function removeMarkups(str) {
    const reg = /<\/?.*?>/g;
    return str.replace(reg, '');
}