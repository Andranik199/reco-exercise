import React from 'react';
import styles from './Sidebar.module.scss'
import firstIcon from 'icons/vis.svg';
import secondIcon from 'icons/Frame.svg';
import thirdIcon from 'icons/Group.svg';

export const Sidebar: React.FC = () => {
    const tabs = [
        {
            icon: firstIcon,
            title: 'Data Catalog',
        },
        {
            icon: secondIcon,
            title: 'Processes',
        },
        {
            icon: thirdIcon,
            title: 'Incidents',
        }
    ]
    return (
        <div className={styles.sidebar}>
            <span className={styles.logo}>RecoLabs</span>
            <div className={styles.navItemsContainer}>
                {tabs.map(item => (
                    <div className={styles.navItem}>
                        <img src={item.icon} alt={item.icon}/>
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
            <div />
        </div>
    )
}
