import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

export default function PrivateRoute({children , ...rest}){
    let isLoggedIn = useSelector(state=>state.login.isLoggedIn);

    return (
        <Route {...rest}
    render={({location}) =>
        isLoggedIn ? (
            children
        ) : (
            <Redirect to={
                {
                    pathname: "/",
                    state: {from: location}
                }
            }
            />
        )
    }
    />
    )

}