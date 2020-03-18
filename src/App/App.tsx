import React from 'react';
import './App.scss';
import Myservice from '../Myservice/Myservice'
import Page from "./AppHtml"
var $ = require("jquery");
var swal = require("sweetalert");

class App extends Myservice {
  state = {
    test_style: {
      color: "red"
    }
  }

  constructor(props: any) {
    super(props);

  }


  references = {
     test: React.createRef()
    }
  test2 = () => {
    //@ts-ignore
    console.log($(this.references.test.current).css({ "background-color": this.references.test.current.value }))
    //@ts-ignore
    console.log(this.references.test.current.value)
  }

  guru() {
    // swal("hisdf", "")
    swal({
      title: "Data!",
      text: JSON.stringify(this.fetch_data("https://jsonplaceholder.typicode.com/todos/1", "GET")),
      icon: "success",
    });
  }
  test(a: any) {
    swal(a)
  }

  render() {
    return (
      <Page _this={this} references={this.references} /> 
    )
  }

  setColor(e: any) {
    let test_style = {
      color: e.target.value,
    }
    this.setState({ test_style: test_style })

  }


  componentDidMount() {
    // $(".wel").css({ 'color': 'red' })
    $(".test").click(function () {
      alert("Guru");
    });

    super.componentDidUpdate();
  }

  componentDidUpdate() {
    super.componentDidUpdate();
  }


}

export default App;
