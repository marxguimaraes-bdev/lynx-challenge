import React from 'react';

import './header.css';

export function Header(props) {
    return (
        <div className="header">{ props.title }</div>
    );
}