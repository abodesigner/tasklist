import { propTypes } from "../interfaces";

const CustomModal = ({ open, onClose, children }: propTypes) => {

    return (
        <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>

            <div className={`bg-white px-6 py-6 rounded-lg shadow transition-all max-w-lg ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>

                <button className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-600" onClick={onClose}>X</button>

                {children}
            </div>

        </div>
    )
}
export default CustomModal