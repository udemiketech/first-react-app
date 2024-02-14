import Button from "../shared/Button"
import Card from "../shared/card"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const redirect = useNavigate();

  async function RegisterHandler(e){
    e.preventDefault();

    try{
      const res = await fetch(`https://startweb-feedback-api.onrender.com/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, email, password}),
      });
      const data = await res.text();
      if (data === "exist"){
        alert("User already exist!!!");
      }else if(data !== "exist"){
        redirect("/login")
      }
    }catch (err){
      console.log(err);
    }
  }
  return (
    <Card>
        <form onSubmit={RegisterHandler}>
            <div>
                <input type="text" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
            <div>
            <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
            <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <Button type="submit">Register</Button>
        </form>
    </Card>
  )
}

export default Register