"use client"
import React, { useEffect, useState } from 'react';
import CModal from './CModal';

const CollectionModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        openModal();
    }, [])

    return (
        <div>
            {
                isModalOpen && <CModal closeModal={closeModal}>
                    <h2 className='text-2xl font-semibold text-center'>This is Collection Modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente rem eligendi magnam, molestiae aut assumenda quas officia eveniet? Omnis quas qui autem, magnam repellat laborum rerum, inventore blanditiis magni quam velit molestiae,
                    </p>
                </CModal>
            }

        </div>
    );
};

export default CollectionModal;