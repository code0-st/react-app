import { followAC, unfollowAC, setDataAC, setTotalCountAC, toggleCurrentPageAC } from "../../Redux/authorsPage-reducer";

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");

let mapStateToProps = (state) => {
    return {
        users: state.authorsPage.users,
        usersForPage: state.authorsPage.usersForPage,
        currentPage: state.authorsPage.currentPage,
        totalCount: state.authorsPage.totalCount
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
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleCurrentPage: (currentPage) => {
            dispatch(toggleCurrentPageAC(currentPage))
        }
    }
}

const AuthorsContainer = connect(mapStateToProps, mapDispatchToProps)(Authors);

export default AuthorsContainer;