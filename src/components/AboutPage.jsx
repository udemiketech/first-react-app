import { Link } from "react-router-dom"
import Card from "../shared/card"


function AboutPage() {
  return (
    <Card>
        <div>
            <h1>About this project</h1>
            <p>This is a react app to leave reviews about a product or service</p>
            <p>Version: 1.0.0</p>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>

    </Card>
  )
}

export default AboutPage