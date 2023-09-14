import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";


const Update = () => {
  const [data, setData] = useState({title: "",description: ""})
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    setLoading(true);

    const prevData = async () => {
      const response = await fetch(`http://localhost:5000/notes/${id}`);

      if (response.ok) {
        const previousData = await response.json()
        setData(previousData);
        setLoading(false)
      }
    }

    prevData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    })

    if (response.ok) {
      enqueueSnackbar("Note updated successfully", { variant: "success" })
      navigate("/")
    }
  }


  return (
    <>
      <BackButton />
      {loading ? <Spinner /> : <div className="flex min-h-[80vh] justify-center items-center text-white">
        <div className="w-[600px] p-5 md:p-[2.5rem] max-w-full border-4 border-[#ffffff] rounded-lg">
          <h1 className="font-extrabold text-3xl mb-6 mt-2 md:text-4xl  text-white text-center ">Update Note</h1>

          <form className="flex flex-col" onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input required minLength={3} className="rounded-lg py-3 px-5 text-black border-none outline-none mt-3 mb-9" type="text" name="title" id="title" value={data.title} onChange={handleChange} />
            
            <label htmlFor="description">Description</label>
            <input required minLength={3} className="rounded-lg py-3 px-5 text-black border-none outline-none mt-3 mb-9" type="text" name="description" id="description" value={data.description} onChange={handleChange} />

            <div className="flex justify-center items-center gap-x-5">
              <button type="button" onClick={() => navigate("/")} className="bg-gray-600 py-3 px-4 rounded-lg self-center hover:bg-gray-900  transition-all active:scale-75">Back</button>
              <button type="sumbit" className="bg-black py-3 px-4 rounded-lg self-center hover:bg-gray-900  transition-all active:scale-75">Edit</button>
            </div>

          </form>
        </div>
      </div>}
    </>
  )
}

export default Update