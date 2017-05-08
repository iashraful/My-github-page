/**
 * Created by ashraful on 5/7/17.
 */

import React, {Component} from 'react';

import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';

class ContentView extends Component {
    /**
     * This component will include after the Navigation Bar. Because Navigation bar will fixed in position and
       it will not changed for any kind of pages.
     */
    render() {
        // Registering plugins
        const plugins = [pushStateLocationPlugin];

        return (
            <div>
                {/* All the view will be Here */}
                <UIRouter plugins={plugins} states={this.props.states}>
                    <UIView/>
                </UIRouter>
            </div>
        )
    }
}

export default ContentView;
