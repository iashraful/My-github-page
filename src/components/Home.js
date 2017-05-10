/**
 * Created by ashraful on 5/7/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import me from '../images/me.jpg';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                	<div className="col-md-4 col-sm-6 text-center">
                		<img className="rounded" src={me} width="200" height="240" alt="Profile showcase"/>
                	</div>
                	<div className="col-md-8 col-sm-6">
                		<h4>Mohammad Ashraful Islam</h4>
                		<p>Junior Software Engineer at <strong>Field Information Solutions Ltd.</strong></p>
                		<p>
                			Ashkona Road, Airport, Uttara, Dhaka 1230 <br/> 
                			ashrafulrobin3@gmail.com <br/>
                			01757722681 <br/>
                			<a href="https://github.com/iamashraful" target="_blank">https://github.com/iamashraful</a>
                		</p>

                		<Link className="btn btn-outline-success" to="/resume" role="button">View Resume</Link>
                	</div>
                </div>
            </div>
        )
    }
}

export default Home;
