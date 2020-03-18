
import React from 'react';
import './Test2.scss';
import Page from './Test2Html'
import Myservice from '../Myservice/Myservice'
var $ = require("jquery");
var swal = require("sweetalert");

class Test2 extends Myservice {

    constructor(props:any) {
        super(props);
    }

    references = {
        test_in: React.createRef(),
        test_out: React.createRef()
    }

    test2 = () => {
    //@ts-ignore
    $(this.references.test_out.current).text(this.references.test_in.current.value)
  }

     componentDidMount() {
        super.componentDidMount();
    }

    componentDidUpdate() {
        super.componentDidUpdate();
    }

    guru() {
         swal("hi","")
    }

    render() {
        return (
             <Page _this={this} references={this.references} />
        )
    }
}

export default Test2;
    