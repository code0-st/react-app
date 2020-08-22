import { followAC, unfollowAC, setDataAC } from "../../Redux/authorsPage-reducer";

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");

let mapStateToProps = (state) => {
    return {
        users: state.authorsPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setData: (data) => {
            dispatch(setDataAC(data))
        }
    }
}

const AuthorsContainer = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsContainer;