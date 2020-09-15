import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';


class SidebarContainer extends React.Component {
    componentDidMount = () => {
    }
    render = () => {
        return (
            <Sidebar { ...this.props }/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sidebarNavigation: state.sidebar.sidebarNavigation,
        popularAuthors: state.sidebar.popularAuthors,
        socialShare: state.sidebar.socialShare,
    }
}

export default connect(mapStateToProps, null)(SidebarContainer);
