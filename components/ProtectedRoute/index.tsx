import redirect from "nextjs-redirect";
import { Fragment, useContext } from "react";
import { AuthContext } from "../../providers/Auth";

const Redirect = redirect("/error");

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser === false) {
        return <Redirect>...</Redirect>;
    }
    return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
