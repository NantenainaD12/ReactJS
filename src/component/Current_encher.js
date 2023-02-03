
import React, { Component } from 'react';
import ListPage from "./Func_list";

class YourComponent extends Component{
    state = {
        dataArray: []
    }
    //
    //
    // componentDidMount() {
    //     axios.get('http://192.168.1.188:8080/encher/get_all_current')
    //         .then(response => {
    //             this.setState({ dataArray: response.data });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }


    render() {
        return (
            <div>
                <ListPage />
            </div>
        );
    }
}

export default YourComponent;
