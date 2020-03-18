
import React from 'react';
import { Link } from 'react-router-dom';

var Page = function (props: any) {
    let _this = props._this 
    let references = props.references
    return (
        <div className="App">
            <h1 className="wel">Welcome</h1>
            <h2>Routes</h2><br />
            <Link to='/routes'>links</Link><br />
            <p>
                <input type="text" defaultValue="red" onChange={_this.setColor.bind(_this)} />
                <b style={_this.state.test_style}>Test state update: {JSON.stringify(_this.state.test_style)}</b>
            </p>
            <input type="button" value="test" onClick={_this.guru.bind(_this)} /><br />
            <input type="text" placeholder="Type color name" onChange={_this.test2} ref={references.test}/> 
        </div>
    )
}
export default Page;
