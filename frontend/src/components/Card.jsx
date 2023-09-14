import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { PiNotePencilBold } from 'react-icons/pi';
import { MdDelete } from 'react-icons/md';
import Modal from "./Modal";
import { useState } from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";


// eslint-disable-next-line react/prop-types
const Card = ({ title, description, id }) => {
  const [modal, setModal] = useState(false)

  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className="w-[350px] break-words bg-white p-[2rem] max-w-[100%] rounded-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">

      <h2 className="font-extrabold text-[2rem] text-center leading-[1.5] mb-4">{title}</h2>
      <p className="text-[16px]  font-normal text-center mb-4">{description}</p>

      <div className="flex justify-center gap-4">
        <AiFillEye onClick={() => setModal(true)} data-tooltip-id="Modal" className="text-[30px] my-3 border:0 cursor-pointer text-sky-700" />
        <ReactTooltip id="Modal" place="bottom-end" content="View"/>

        <Link data-tooltip-id="Delete" className="text-[30px] my-3  text-red-600" to={`/notes/delete/${id}`}><MdDelete /></Link>
        <ReactTooltip id="Delete" place="bottom" content="Delete"/>

        <Link data-tooltip-id="Update" className="text-[30px] my-3  text-green-600" to={`/notes/update/${id}`}><PiNotePencilBold /></Link>
        <ReactTooltip id="Update" place="bottom-start" content="Edit"/>

      </div>

      {modal &&
        <Modal title={title} description={description} id={id} closeModal={closeModal} />}
        
    </div>
  )
}


export default Card