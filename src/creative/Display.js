/*global*/
import {EventEmitter} from 'events';
import {tracked_events, trackClick, trackEvent} from "../core/Tracking";

import TweenMin from 'gsap';

class Display extends EventEmitter {
    init(config) {
        // start here
        console.log('visualisation start');



        // example tracking
        trackClick(tracked_events.TAP_TO_WEBSITE);
        trackEvent(tracked_events.EXAMPLE_TRACKED_EVENT);

        // example dom manipulation
        TweenMin.to('body', 0.5, {alpha: 1});
        var container = document.querySelector(config.container);
        container.insertAdjacentHTML('beforeend', '<h1>Formats2.0 Template</h1>');
        if (config.responsive) {
           container.insertAdjacentHTML('beforeend', 'responsive: ' + config.width + ' x ' + config.height);
        } else {
           container.insertAdjacentHTML('beforeend', 'Fixed: ' + config.width + ' x ' + config.height);
        }
    }
}
export default Display;