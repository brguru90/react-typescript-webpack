
import React from 'react';
import { Link } from 'react-router-dom';

var Page = function (props: any) {
    let _this = props._this 
    let references = props.references
    return (
        <div className="Test2">
            <h1 className="wel">Welcome</h1>
            <h2>Test2</h2><br />
            <Link to='/'>App</Link><br />
            <Link to='/routes'>links</Link><br />
             <input type="text" placeholder="Type text" onChange={_this.test2} ref={references.test_in}/><br />
              <h6 ref={references.test_out}></h6><br />
            <input type="button" value="test" onClick={_this.guru} /><br />
        </div>
    )
}
export default Page;
    