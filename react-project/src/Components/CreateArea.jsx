import React, { useState } from "react";
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  

  const showInput = () => {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    axios.post('http://localhost:5000/notes/add', note).then(res => console.log(res.data));
    setNote({ 
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && 
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        }
        <textarea
          name="content"
          onClick={showInput}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
