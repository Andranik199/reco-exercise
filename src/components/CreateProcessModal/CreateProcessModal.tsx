import React, {useState} from 'react';
import styles from './CreateProcessModal.module.scss';
import classnames from 'classnames'
import {MdsItem} from "store/slices/processes/processes.slice";
import {v4} from "uuid";
import financeIcon from 'icons/finance.svg';
import shareIcon from 'icons/share.svg';
import musicIcon from 'icons/music.svg';
import likeIcon from 'icons/like.svg';

type CreateProcessModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (process: MdsItem) => void;
}


export const CreateProcessModal: React.FC<CreateProcessModalProps> = ({isOpen, onClose, onSubmit}) => {
    const [process, setProcess] = useState<MdsItem>({
        name: '',
        description: '',
        id: v4(),
        iconUrl: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProcess(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const images = [
        {
            title: 'Finance',
            icon: financeIcon
        },
        {
            title: 'Share',
            icon: shareIcon
        }, {
            title: 'Like',
            icon: likeIcon
        },
        {
            title: 'Music',
            icon: musicIcon
        }]
    const onSelectImage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProcess(prev => ({ ...prev, iconUrl: e.target.value }))
    }

    const handleClick = () => {
        onSubmit(process);
        onClose()
    }
    return (
        <div id="myModal" className={classnames(styles.modal, {
            ['d-none']: !isOpen,
            ['d-block']: isOpen,
        })} data-testid='modal'>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <div className={styles.inputsContainer}>
                    <input
                        placeholder='Please type name here'
                        value={process.name}
                        name='name'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Please type name here description here'
                        name='description'
                        value={process.description}
                        onChange={handleChange}
                    />

                    <select onChange={onSelectImage}>
                        <option />
                        {images.map(item => (
                            <option key={item.title} value={item.icon}>
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>

                <button className={styles.submitBtn} onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    )
}
