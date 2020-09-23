import React from 'react';
import { setTotalCountAC, requestUsers, follow, unfollow} from "../../Redux/authorsPage-reducer";
import Preloader from '../Common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getCurrentPage, getDisabled, getIsFetching, getTotalCount, getUsers, getUsersForPage } from '../../Redux/auth-selector';

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");


class AuthorsContainer extends React.Component {
    componentDidMount = () => {
        this.props.requestUsers(this.props.usersForPage, this.props.currentPage);
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.requestUsers(this.props.usersForPage, pageNumber);
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
                users={this.props.users}
                disabled={this.props.disabled}
                onChangeCurrentPage={this.onChangeCurrentPage}
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
        users: getUsers(state),
        usersForPage: getUsersForPage(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        isFetching: getIsFetching(state),
        disabled: getDisabled(state),
    }
}

export default compose(
    connect(mapStateToProps, {setTotalCountAC, requestUsers, follow, unfollow}),
    withAuthRedirect
)(AuthorsContainer)
