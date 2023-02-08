import React, {useState} from 'react';
import {ProcessCard} from "../ProcessCard/ProcessCard";
import styles from './ProcessLibrary.module.scss';
import {useAppDispatch, useAppSelector} from 'store';
import {processesActions, processesSelectors} from 'store/slices/processes/config';
import {CreateProcessModal} from "components/CreateProcessModal/CreateProcessModal";
import {MdsItem} from "store/slices/processes/processes.slice";

export const ProcessLibrary:React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const processes = useAppSelector(processesSelectors.selectAllProcesses)
    const openModal = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

    const handleAddProcess = (process: MdsItem) => {
        dispatch(processesActions.setNewItem(process))
    }
    return <div className={styles.processLibrary}>
        <div className={styles.processHeader}>
            <h1 className={styles.title}>
                My processes
            </h1>

            <button className={styles.createProcessCta} onClick={openModal}>
                + Create New
            </button>
        </div>

        <div className={styles.processesContainer}>
            {processes.map(item => {
                return <ProcessCard key={item.id} item={item} />
            })}
        </div>
        <CreateProcessModal isOpen={isOpen} onClose={handleClose} onSubmit={handleAddProcess}/>
    </div>
}
