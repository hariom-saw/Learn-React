import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>
            Error Code: {err.status}<br/>
            Error msg: {err.statusText}
        </h1>
    </div>
  )
}

export default Error