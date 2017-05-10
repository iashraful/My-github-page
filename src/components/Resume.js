/**
 * Created by ashraful on 5/7/17.
 */

import React, {Component} from 'react';

class Resume extends Component {
    render() {
        return (
            <div className="container jumbotron">
                <div className="resume">
                    <div className="row">
                        <div className="col-md-8 col-sm-7 col-xs-12">
                            <h3 className="person-name">Mohammad Ashraful Islam</h3>
                            <p className="moto">passionate problem solver</p>
                        </div>

                        <div className="col-md-4 col-sm-5 col-xs-12">
                            <i className="fa fa-map-marker p-r-10" aria-hidden="true"/> Ashkona, Uttara, Dhaka <br/>
                            <i className="fa fa-phone p-r-10" aria-hidden="true"/> 01757722681 <br/>
                            <i className="fa fa-envelope p-r-10" aria-hidden="true"/> ashrafulrobin3@gmail.com <br/>
                            <i className="fa fa-github p-r-10" aria-hidden="true"/>
                            <a href="https://github.com/iamashraful" target="_blank">
                                https://github.com/iamashraful
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="row p-t-2p">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3>Summary</h3>
                            <hr/>
                            <p className="text-muted">
                                I am passionate software enthusiast, team player, self motivated person. I love to share
                                knowledge with
                                another player of team and outside the team. Like to join many kinds of conference or
                                events that are
                                related to programming for gathering knowledge.
                            </p>
                        </div>
                    </div>

                    {/* Educational Qualification */}
                    <div className="row p-t-2p">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3>Education</h3>
                            <hr/>
                            <div className="row">
                                {/* University */}
                                <div className="col-md-9 col-sm-8 col-xs-12">
                                    <h5>Bachelor in Computer Science and Engineering</h5>
                                    <p className="text-muted">IUBAT University, Uttara, Dhaka</p>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <p className="text-muted pull-right">2014 - Present</p>
                                </div>

                                {/* HSC */}
                                <div className="col-md-9 col-sm-8 col-xs-12">
                                    <h5>Higher Secondary School Certificate</h5>
                                    <p className="text-muted">Milestone College, Uttara, Dhaka</p>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <p className="text-muted pull-right">2011 - 2013</p>
                                </div>

                                {/* SSC */}
                                <div className="col-md-9 col-sm-8 col-xs-12">
                                    <h5>Secondary School Certificate</h5>
                                    <p className="text-muted">B.N.B High School, Mirzapur, Tangail</p>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <p className="text-muted pull-right">2006 - 2011</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Work History */}
                    <div className="row p-t-2p">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3>Work History</h3>
                            <hr/>
                            <div className="row">
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <h5>Junior Software Engineer</h5>
                                    <a href="https://field.buzz" target="_blank">Field Information Solutions Ltd</a>
                                    <p className="text-muted">
                                        I just joined here on their backend team. I hope I'll enjoy it.
                                    </p>
                                </div>

                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <p className="text-muted pull-right">February 2017 - Present</p>
                                </div>
                            </div>

                            <div className="row p-t-2p">
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <h5>Trainee Software Engineer</h5>
                                    <a href="https://interconnectionbd.com/" target="_blank">Interconnection Ltd</a>
                                    <p className="text-muted">
                                        I have have been working with Python, Django, Django REST Framework, Javascript,
                                        AngularJS. I wrote unit test on python. And most of the time I wrote Angular
                                        codes.
                                    </p>
                                </div>

                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <p className="text-muted pull-right">May 2016 - January 2017</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skill Descriptions */}
                    <div className="row p-t-2p">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3>Skills</h3>
                            <hr/>
                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <h5>Python</h5>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                    <p className="skill-desc text-muted">
                                        I love python more than everything. Personally I like to use python. I
                                        have picked it in 2014 and I never look behind. In web backend I used
                                        Django, Django REST Framework and some other stacks. Also I used
                                        python for small scripting web scraping.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <div className="progress">
                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                             aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                    <p className="skill-desc text-muted">
                                        I a kid on javascript's world. Truly I didn't work much with vanila JS. But
                                        I have worked with <strong>AngularJS, ReactJS, React Native</strong> etc. From
                                        that
                                        experience I can say, Yes! I know at least some JavaScript.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <h5>Django</h5>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                             aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                    <p className="skill-desc text-muted">
                                        Django is robust Web Framework written in Python. Since <code>Django 1.7</code>
                                        I am working with django. It's now <code>Django 1.11</code> LTS released.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <h5>REST API</h5>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <div className="progress">
                                        <div className="progress-bar w-60" role="progressbar" aria-valuenow="60"
                                             aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                    <p className="skill-desc text-muted">
                                        I have a good concept on REST API. I have been working with Django REST
                                        Framework
                                        since 2015.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12">
                                    <h5>Version Control</h5>
                                </div>
                                <div className="col-md-8 col-sm-7 col-xs-12">
                                    <div className="progress">
                                        <div className="progress-bar w-80" role="progressbar" aria-valuenow="80"
                                             aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                    <p className="skill-desc text-muted">
                                        Controlling of code's version is power of project. I have a very good concept on
                                        <code>git</code>. But I know how <code>SVN, Mercury</code> and others work. I
                                        have confidence to work with anything.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Personal Details */}
                    <div className="row p-t-2p">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <h3>Personal Details</h3>
                            <hr/>
                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Father's Name</h6>
                                </div>
                                <div className="col-md-7  col-sm-6 col-xs-12">
                                    <h6 className="text-muted">Nazrul Islam</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Mother's Name</h6>
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <h6 className="text-muted">Taslima Begum</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Nationality</h6>
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <h6 className="text-muted">Bangladeshi</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Permanent Address</h6>
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <h6 className="text-muted">Village: Ruhitpur, Post Office: Vathgram,
                                        Pollice Station: Mirzapur, District: Tangail</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Date of Birth</h6>
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <h6 className="text-muted">December 31, 1996</h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-5 col-sm-6 col-xs-12">
                                    <h6>Blood Group</h6>
                                </div>
                                <div className="col-md-7 col-sm-6 col-xs-12">
                                    <h6 className="text-muted">O+ (ve)</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-t-2p">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h6>I hereby declare that all information provided in avobe is correct, complete and true to the best of my
                            knowledge.
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;
