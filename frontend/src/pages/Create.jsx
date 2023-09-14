import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton";
import { useSnackbar } from "notistack";

const Create = () => {
  const [data, setData] = useState({
    title: "",
    description: ""
  })
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevFormData) => ({ ...prevFormData, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const saveData = async () => {
      const response = await fetch("http://localhost:5000/notes", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json"
        }})

      if (response.ok) {
        enqueueSnackbar("Note created successfully", { variant: "success" })
        navigate("/")
      }

    }
    saveData()
  }

  return (
    <>
      <BackButton />
      <div className="flex min-h-[80vh] justify-center items-center text-white">
        <div className="w-[600px] p-4 md:p-[2.5rem] max-w-full border-4 border-[#ffffff] rounded-lg">
          <h1 className="font-extrabold text-3xl mb-6 mt-2 text-white text-center md:text-4xl md:mb-8 ">Create Note</h1>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input required minLength={3} className="rounded-lg py-3 px-5 text-black border-none outline-none mt-3 mb-9" type="text" name="title" id="title" value={data.title} onChange={handleChange} />

            <label htmlFor="description">Description</label>
            <input required minLength={3} className="rounded-lg py-3 px-5 text-black border-none outline-none mt-3 mb-9" type="text" name="description" id="description" value={data.description} onChange={handleChange} />

            <button className="bg-black py-3 px-4 rounded-lg self-center hover:bg-gray-900 transition-all active:scale-75">Save</button>

          </form>

        </div>
      </div>
    </>
  )
}

export default Create