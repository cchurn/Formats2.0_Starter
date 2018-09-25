/**
 * Created by cchurn16 on 11/28/17.
 */
/*global*/
import {EventEmitter} from 'events';
import {tracked_events, trackClick, trackEvent} from "../core/Tracking";

class Visualisation extends EventEmitter {
    init(config) {
        // start here
        console.log('visualisation start');
        trackClick(tracked_events.TAP_TO_WEBSITE);
        trackEvent(tracked_events.EXAMPLE_TRACKED_EVENT);
    }
}
export default Visualisation;