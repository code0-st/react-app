import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getMyId } from '../../Redux/sidebar-reducer';


class SidebarContainer extends React.Component {
    componentDidMount = () => {
        console.log(this.props);
        this.props.getMyId();
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
        myId: state.sidebar.myId,
    }
}

export default connect(mapStateToProps, { getMyId })(SidebarContainer);
