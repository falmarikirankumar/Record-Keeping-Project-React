import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});
  // const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    // setData({ name: name, email: email });
    setData([...data, form]);
    setForm({ form });
    document.getElementById("form-data").reset();
    // setName("");
    // setEmail("");
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header />
      <form action="" id="form-data">
        <div className="form">
          <Stack direction="row" spacing={2}>
            <TextField
              id="outlined-basic"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              id="outlined-basic"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              label="Email"
              variant="outlined"
            />
            <Button color="success" onClick={addData} variant="contained">
              <AddIcon />
            </Button>
          </Stack>
        </div>
      </form>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
