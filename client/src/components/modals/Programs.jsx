import React, { useContext } from 'react';
import { Modal } from 'antd';
import { MainContext } from '../../contexts/MainContext';

const Programs = () => {
    const { open, setOpen } = useContext(MainContext)
    return (
        <div className='Programs'>
            <Modal
                // title="Modal 1000px width"
                centered
                open={open}
                footer={null}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div>
                    <p>some contents...</p>
                    <div className='get-program-header'>
                    Get Spin and Learn Program
                    </div>
                    <div>
                        How many sessions (weeks) would like? 
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default Programs;
