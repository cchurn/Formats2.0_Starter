/*global TweenMax Linear*/
import {EventEmitter} from 'events';
import {tracked_events, trackClick, trackEvent} from "../core/Tracking";
// example imports (adds to bundle size)
// import $ from 'jquery';

class Display extends EventEmitter {
    init(config) {
        // start here
        TweenMax.to('body', 1, {alpha: 1});
        this.doExample(config);
    }
    /**
     * This is just for example and can be removed
     */
    doExample(config) {
        // example dom manipulation
        var container = document.querySelector(config.container);
        container.insertAdjacentHTML('beforeend', '<h1>Formats2.0 Template</h1>');
        if (config.responsive) {
            container.insertAdjacentHTML('beforeend', 'responsive: ' + config.width + ' x ' + config.height);
        } else {
            container.insertAdjacentHTML('beforeend', 'Fixed: ' + config.width + ' x ' + config.height);
        }

        /**
         * Tracking
         */
        // example tracking event (or just use $AD.event([event]))
        trackEvent(tracked_events.EXAMPLE_TRACKED_EVENT);

        // example tracking click
        let bt1 = document.querySelector('.bt--one');
        let bt2 = document.querySelector('.bt--two');
        ["click", "touchend"].forEach(function(eventName) {
            bt1.addEventListener(eventName, function(e) {
                e.preventDefault();
                trackClick(tracked_events.TAP_TO_WEBSITE);
            });

            // load an image which will be compiled into the final build
            bt2.addEventListener(eventName, function(e) {
                e.preventDefault();
                document.querySelector('.testimage').src = require('../img/testimg.png');
                TweenMax.to(document.querySelector('.testimage'), 5, {rotation: 360, repeat: -1, ease: Linear.easeNone})
            });
        })
    }
}
export default Display;