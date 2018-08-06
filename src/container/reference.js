import React from 'react';

import { Item   } from './item/item';
import { Header } from './header/header';

export function Reference(props) {
    return (
        <div className="reference">
            <Header title="Você visitou:" />
            <Item item={ props.reference.item } />
        </div>
    );
}