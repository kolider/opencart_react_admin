import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateOutlet = () => {
    let auth = useSelector(state => state.auth?.isLogged)
    let location = useLocation()

    return auth ? <Outlet /> : <Navigate to="/login" state={{from: location}}/>
}

export default PrivateOutlet