import React from 'react';
import Button from '@monorepo/button';
import { Icon, SvgIcon } from '@monorepo/icons';
import Input from '@monorepo/input';

import Toof from './components/Too';

import './App.css';
import styles from './index.module.scss';

function App() {
    // const lol = ['fgfdg', 33333333333333333, 'dfsffffffffffffffff', 'dfsffffffffffffffff'];
    const a = 5;
    function b() {
        const a = 10;
        console.log(a);
    }
    const flol = {
        lol: 6,
        tes: 9,
        lols: 'ghgh dfsd dddd',
        sfddf: 'fff7ykk',
    };
    flol.tes = 13;

    if (flol) console.log('ddd');

    const lolll = 'dfdsf';

    // if (lolll) {
    // }
    // const lol = ['fff'];

    // console.log(lol);

    // console.log(a)
    // console.log(b)
    return (
        <div className='App'>
            <Button content={'lodfkdslfksd'} />
            <Input />
            <Toof />
            <Icon name='delete_0' />
            <Icon name='error_0' />
            <Icon name='function_0' />
            <Icon name='shared_0' />
            <SvgIcon name='function_0' />
            <SvgIcon name='plus_0' />
        </div>
    );
}

export default App;
