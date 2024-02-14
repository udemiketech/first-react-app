import Button from "../shared/Button"
import Card from "../shared/card"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import useLocalStorage from "../hooks/useLocalStorage"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [state, dispatch] = useAuth()
  const {setItem} = useLocalStorage("x-auth-token")

  const redirect = useNavigate();

  async function LoginHandler(e){
    e.preventDefault();

    try{
      const res = await fetch(`https://startweb-feedback-api.onrender.com/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const data = await res.json();
      if (res.status === 200){
        dispatch({type: "setToken", payload: data.token})
        setItem(data.token)
        redirect("/")
      }else if(res.status !== 200){
        alert("Invalid email or password!!!");
      }
    }catch (err){
      console.log(err);
    }
  }
  return (
    <Card>
        <form onSubmit={LoginHandler}>
            <div>
            <input type="email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div>
            <input type="password" placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <Button type="submit">Login</Button>
        </form>

        <Link to="/register">Register</Link>
    </Card>
  )
}

export default Login