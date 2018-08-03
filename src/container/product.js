import React from 'react';

export class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <img src={ this.props.item.imageName } alt={ this.props.item.name }></img>
                <div>{ this.props.item.name }</div>
                <div>Por: { this.props.item.price }</div>
                <div dangerouslySetInnerHTML={ { __html: this.props.item.productInfo.paymentConditions } } ></div>
                <div>sem juros</div>
            </div>
        )
    }


}