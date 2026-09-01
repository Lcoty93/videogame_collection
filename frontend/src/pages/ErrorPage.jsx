import { Link } from "react-router-dom";

function ErrorPage() {
    return (<div className="errorPage">
    <h1>404: Page not found</h1>
    <Link to="/" className="errorLink">Return Home</Link>
    </div>
    )
}

export default ErrorPage;