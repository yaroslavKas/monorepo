import React, { useEffect } from 'react';

import './index.scss';

const Button = ({ content }: any) => {
    useEffect(() => {
        console.log('dfdfd');
    }, []);

    // let a = 3;
    // function b() {    let a = 10;
    //     console.log(a)
    // }

    return (
        <div>
            <p>Users:</p>
            <button className='button'>{content}</button>
        </div>
    );
};

export default Button;
