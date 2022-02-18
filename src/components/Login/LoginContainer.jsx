import Login from "./Login";
import {connect} from "react-redux";
import {clearIncorrectError, submitLoginForm} from "../../redux/auth-reducer";
import {Navigate, useLocation, useNavigate} from "react-router-dom";

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    isIncorrectCredentials: state.auth.isIncorrectCredentials,
    email: state.auth.email,
    isFetching: state.auth.isFetching
})

const LoginContainer = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/orders'

    const goPrivatePage = () => {
        navigate(fromPage)
    }

    if (props.isLogged){
        return <Navigate to={fromPage} />
    }

    return <Login
        {...props}
        goPrivatePage={goPrivatePage}
    />
}

export default connect(mapStateToProps,
    {
        submitLoginForm,
        clearIncorrectError
    })(LoginContainer)