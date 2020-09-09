import React from 'react';
import { setTotalCountAC, getUsers, follow, unfollow} from "../../Redux/authorsPage-reducer";
import Preloader from '../Common/Preloader';

const { connect } = require("react-redux");
const { default: Authors } = require("./Authors");


class AuthorsContainer extends React.Component {
    componentDidMount = () => {
        this.props.getUsers(this.props.usersForPage, this.props.currentPage);
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.getUsers(this.props.usersForPage, pageNumber);
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
        users: state.authorsPage.users,
        usersForPage: state.authorsPage.usersForPage,
        currentPage: state.authorsPage.currentPage,
        totalCount: state.authorsPage.totalCount,
        isFetching: state.authorsPage.isFetching,
        disabled: state.authorsPage.disabled,
    }
}

export default connect(mapStateToProps, {setTotalCountAC,
        getUsers, follow, unfollow})(AuthorsContainer);
