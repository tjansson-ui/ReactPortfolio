import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className="container">
            <h1>Oops!</h1>
            <p>An error has occurred. 
                {error && (
                    <p className='text-danger'>
                    {error.message}
                    </p>
                 )}... Darn</p>
        </div>
    )
}

export default ErrorPage