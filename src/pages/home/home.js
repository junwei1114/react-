import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import API from '../../api/api';
import './home.less';



class Home extends Component {
    static propTypes = {
        // formData: PropTypes.object.isRequired,
        // saveFormData: PropTypes.func.isRequired,
        // saveImg: PropTypes.func.isRequired,
        // clearData: PropTypes.func.isRequired,
        // clearSelected: PropTypes.func.isRequired,
    }

    state = {
        alertStatus: false, //弹框状态
        alertTip: '', //弹框提示文字
    }

    componentWillMount(){

    }

    render() {
        return (
            <div>主页</div>
        )
    }
}


export default connect(
    // state=>({state:state.home}),
    // {
    //     // 方法
    // }
)(Home)