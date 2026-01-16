import { useNavigate, useRouteError } from "react-router-dom"
import "./ErrorPage.css";

export const Errorpage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); 
    }

    return <section className="error-section">
        <div className="error-contant">
            <img src="https://img.freepik.com/premium-vector/oops-404-error-landing-page-concept-illustration_693194-157.jpg?w=1380" alt="" className="error-img" />
            <div className="text-center">
                <p>{error.data}</p>
                <p className="p-a">
                    The page you were looking for could not be found
                </p>
                <p className="p-b">
                    ... Back to previous page
                </p>
            </div>
            <button className="error-btn" onClick={handleGoBack}>Go Back</button>
        </div>
    </section>
}