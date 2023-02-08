import React from 'react';
import styles from './ProcessCard.module.scss';
import {MdsItem} from "../../store/slices/processes/processes.slice";

type ProcessCardProps = {
    item: MdsItem
}

export const ProcessCard: React.FC<ProcessCardProps> = ({item}) => {
    return (
        <div className={styles.processCard}>
            <div className={styles.iconBlock}>
                <img src={item.iconUrl} alt={item.iconUrl} />
            </div>
            <h1>
                {item.name}
            </h1>

            <p>
                {item.description}
            </p>
        </div>
    )
};
