import { useNavigate, useParams } from "react-router-dom"
import Backbutton from "../components/BackButton";
import { useSnackbar } from "notistack";



const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleDelete = async () => {
    const response = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE"
    })

    if (response.ok) {
      enqueueSnackbar("Note deleted successfully", { variant: "success" })
      navigate("/")
    }
  }
  return (
    <div>
      <Backbutton />
      <button onClick={handleDelete} className="text-[white]  text-1xl md:text-2xl border-3 bg-red-600 p-3 mx-auto mt-6 py-5 block  rounded-lg">Delete note permanently</button>
    </div>
  )
}

export default Delete