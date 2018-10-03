/*global Linear Swiper*/
import {EventEmitter} from 'events';
import {tracked_events, trackClick, trackEvent} from "../core/Tracking";

// example imports (adds to bundle size)
// import TweenMin from 'gsap';
// import $ from 'jquery';

class Display extends EventEmitter {
    init(config) {
        // start here
        console.log('Display start');
    }
}
export default Display;