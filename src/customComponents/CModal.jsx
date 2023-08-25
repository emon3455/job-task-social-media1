import { FaTimes } from 'react-icons/fa';

const CModal = ({ children, closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg relative w-[400px]">
                <button
                    onClick={closeModal}
                    className="absolute top-0 text-red-500 right-0 m-2  hover:text-gray-900"
                >
                    <FaTimes size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default CModal;
