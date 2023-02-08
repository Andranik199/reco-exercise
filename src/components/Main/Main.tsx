import React from 'react';
import {ProcessLibrary} from 'components/ProcessLibrary/ProcessLibrary';
import styles from './Main.module.scss';



export const Main:React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Process Library
                </h1>

                <p className={styles.date}>
                    10/06/2021 - 17/06/2021
                </p>
            </div>

            <ProcessLibrary />
        </div>
    )
}
