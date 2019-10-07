
    import React from 'react';
    import { Link } from 'react-router-dom';

    var page = function (_this: any) {
        return (
            <div className="Routes">
                <h1 className="wel">Welcome</h1>
                <h2>Routes</h2><br />
                <Link to='/routes'>links</Link><br />
                
				<Link to='/'></Link><br />
				<Link to='/App'>App</Link><br />
				<Link to='/guru'>guru</Link><br />

                <input type="button" value="test" onClick={_this.guru} /><br />
            </div>
        )
    }
    export default page;
    