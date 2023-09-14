import { useEffect, useState } from "react"
import Card from "../components/Card"
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";




const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const notesFetch = async () => {
      const response = await fetch("http://localhost:5000/notes");
      if (response.ok) {
        const noteData = await response.json();
        setNotes(noteData)
        setLoading(false)
      }
    }

    notesFetch()


  }, [])


  return (
    <div >
      <div className="flex flex-col justify-center items-center gap-y-6">
        <h1 className="font-extrabold text-4xl text-white text-center ">Your Notes</h1>
        <Link to="/notes/create" className="bg-black border-2 border-[#ffffff9c] text-white p-3 rounded-lg mb-9 active:scale-75 transition-all hover:bg-gray-800">Add Note +</Link>
      </div>

      {notes.length > 0 ? !loading ?

        <div className="grid grid-cols-1 auto-cols-auto place-items-center gap-y-[3rem] gap-x-[1.5rem] md:grid-cols-2 lg:grid-cols-3 ">
          {notes.map((note, idx) => {
            return <Card key={idx} title={note.title} description={note.description} id={note._id} />
          })
          }
        </div> : <Spinner />

        : <h1 className="font-extrabold text-4xl text-white text-center ">No Notes</h1>
      }

    </div>
  )
}

export default Home