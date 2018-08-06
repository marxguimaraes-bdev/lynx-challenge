import React      from 'react';
import ReactDOM   from 'react-dom';
import fetchJsonp from 'fetch-jsonp';

import { Container } from './container/container';

let url = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';

fetchJsonp(url, {
    jsonpCallbackFunction: 'X',
})
.then(res => {
    return res.json();
}).then(json => {
    ReactDOM.render(
        <Container data={json.data} />,
        document.getElementById('root')
    );
}).catch(err => {
    ReactDOM.render(
        <div>Houve um problema ao carregar esta página</div>
    );
});