import React, { useEffect } from 'react';

// import './index.scss';
import styles from './index.module.scss';

const Button = ({ content }: any) => {
    useEffect(() => {}, []);

    // const a = 3;
    // function b() {
    //     const a = 10;
    //     console.log(a);
    // }

    return (
        <div className={styles.bull}>
            <p>Users:</p>
            <button className={styles.button}>{content}</button>
        </div>
    );
};

export default Button;
