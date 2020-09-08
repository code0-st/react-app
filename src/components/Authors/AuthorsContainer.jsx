import React from 'react';
import * as axios from 'axios';
import { followAC, unfollowAC, setDataAC, setTotalCountAC, setCurrentPageAC, toggleIsFetchingAC} from "../../Redux/authorsPage-reducer";
import Preloader from '../Common/Preloader';

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");


class AuthorsContainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetchingAC(true); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${this.props.currentPage}`,
        {
            withCredentials: true,
        })
        .then(response => {
            this.props.setDataAC(response.data.items);
            this.props.toggleIsFetchingAC(false);
            //this.props.setTotalCount(response.data.totalCount)
        })
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.toggleIsFetchingAC(true);
        this.props.setCurrentPageAC(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${pageNumber}`,
        {
            withCredentials: true,
        })
            .then(response => {
                this.props.setDataAC(response.data.items)
                this.props.toggleIsFetchingAC(false);
            })
    }

    render = () => {
        return (
            <>
            {
                this.props.isFetching
                ? <Preloader />
                : <Authors totalCount={this.props.totalCount}
                usersForPage={this.props.usersForPage}
                currentPage={this.props.currentPage}
                onChangeCurrentPage={this.onChangeCurrentPage}
                users={this.props.users}
                follow={this.props.followAC}
                unfollow={this.props.unfollowAC}
                //followAC, unfollowAC, setDataAC, setTotalCountAC, setCurrentPageAC, toggleIsFetchingAC
            />
            } 
             
            </>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.authorsPage.users,
        usersForPage: state.authorsPage.usersForPage,
        currentPage: state.authorsPage.currentPage,
        totalCount: state.authorsPage.totalCount,
        isFetching: state.authorsPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followAC(id));
//         },
//         unfollow: (id) => {
//             dispatch(unfollowAC(id));
//         },
//         setData: (data) => {
//             dispatch(setDataAC(data));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps, {followAC, unfollowAC, setDataAC, setTotalCountAC, setCurrentPageAC, toggleIsFetchingAC})(AuthorsContainer);
