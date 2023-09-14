import { Link } from 'react-router-dom';
import { PiNotePencilBold } from 'react-icons/pi';
import { MdDelete } from 'react-icons/md';
import { ImCross } from 'react-icons/im';


// eslint-disable-next-line react/prop-types
const Modal = ({ title, description, id, closeModal }) => {
  return (
    <div onClick={closeModal} className="fixed bg-black bg-opacity-80 inset-0 z-50 flex justify-center items-center">

      <div onClick={(e) => e.stopPropagation()} className="w-[250px] md:w-[400px] break-words max-w-full bg-white rounded-[50px] flex flex-col  p-[2rem]">
        <ImCross onClick={closeModal} className="cursor-pointer text-[red] self-end mb-5 w-[35px] h-[35px]  bg-black rounded-[50px] py-[10px]" />

        <h2 className="font-extrabold text-[2rem]  text-center leading-[1.5] mb-4">{title}</h2>
        <p className="text-[16px]  font-normal  text-center mb-4">{description}</p>

        <div className="flex justify-center gap-4">
          <Link className="text-[30px] my-3  text-red-600" to={`/notes/delete/${id}`}><MdDelete /></Link>
          <Link className="text-[30px] my-3  text-green-600" to={`/notes/update/${id}`}><PiNotePencilBold /></Link>
        </div>
      </div>
    </div>
  )
}

export default Modal