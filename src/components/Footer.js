import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid text-center">
                    <div className="f-items">
                        <a href="https://github.com/iamashraful" target="_blank">
                            <i className="fa fa-github p-r-20" aria-hidden="true"/>
                        </a>

                        <a href="http://stackoverflow.com/users/5527679/ashraful-islam" target="_blank">
                            <i className="fa fa-stack-overflow p-r-20" aria-hidden="true"/>
                        </a>

                        <a href="https://www.linkedin.com/in/ashraful-robin" target="_blank">
                            <i className="fa fa-linkedin p-r-20" aria-hidden="true"/>
                        </a>

                        <a href="https://www.facebook.com/ThisIsMrRobin" target="_blank">
                            <i className="fa fa-facebook-official p-r-20" aria-hidden="true"/>
                        </a>

                        <a href="https://twitter.com/__ashraful" target="_blank">
                            <i className="fa fa-twitter p-r-20" aria-hidden="true"/>
                        </a>

                        <a href="https://www.instagram.com/__ashraful/" target="_blank">
                            <i className="fa fa-instagram p-r-20" aria-hidden="true"/>
                        </a>
                        <a href="https://github.com/iamashraful/My-github-page" target="_blank">
                            <span className="pull-right"><i className="fa fa-code-fork p-r-10" aria-hidden="true"/>
                                <span className="f-source-title">Source of this site</span>
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
