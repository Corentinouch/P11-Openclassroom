import { Link } from "react-router-dom"
import './error.css'
function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <div><p>Oups ! la page que vous demandez n'existe pas</p></div>
            <Link to="/">Retourner à la page d'accueil</Link>
        </div>
)
}
export default Error
