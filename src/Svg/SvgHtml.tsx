
import React from 'react';
import { Link } from 'react-router-dom';

var page = function (_this: any) {
    return (
        <div className="Svg">
            <h1 className="wel">Welcome</h1>
            <h2>Svg</h2><br />
            <Link to='/'>App</Link><br />
            <Link to='/routes'>links</Link><br />
            <input type="button" value="test" onClick={_this.guru} /><br />
            <div className="svg" id="svg_image">
                {_this.state.svg_image}
            </div>
        </div>
    )
}
export default page;
    