import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from "react-icons/io5"

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="text-[32px] md:text-[50px] text-white cursor-pointer">
      <IoArrowBack />
    </div>
  )
}

export default BackButton