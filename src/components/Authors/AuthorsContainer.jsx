import React from 'react';
import * as axios from 'axios';
import { followAC, unfollowAC, setDataAC, setTotalCountAC, setCurrentPageAC, toggleIsFetchingAC} from "../../Redux/authorsPage-reducer";
import Preloader from '../Common/Preloader';

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");


class AuthorsContainer extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${this.props.currentPage}`)
        .then(response => {
            this.props.setData(response.data.items);
            this.props.toggleIsFetching(false);
            this.props.setTotalCount(response.data.totalCount)
        })
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersForPage}&page=${pageNumber}`)
            .then(response => {
                this.props.setData(response.data.items)
                this.props.toggleIsFetching(false);
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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id));
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id));
        },
        setData: (data) => {
            dispatch(setDataAC(data));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsContainer);
