/* global $AD*/
export let tracked_events = {
    EXAMPLE_TRACKED_EVENT: {label: 'example tracked event'},
    TAP_TO_WEBSITE: {label: 'tap to website', url: 'http://www.oath.com'}
};
/**
 * Track clicks
 */
export function trackClick(e) {
    console.log('%c Tracking click: '+ e.label +' ', 'background: #ffcc00; color: #000000');
    try {
        switch (e) {
            case tracked_events.TAP_TO_WEBSITE:
                $AD.click('tap to website', 'http://www.oath.com');
                break;
            default:
        }
    } catch(err) {
        console.log('Failed to track click (probably local):', e.label);
    }
}
/**
 * Track events
 */
export function trackEvent(e) {
    console.log('%c Tracking event: '+ e.label +' ', 'background: #4caf50; color: #ffffff');
    try {
       switch (e) {
           case tracked_events.EXAMPLE_TRACKED_EVENT:
               $AD.event('example tracked event');
               break;
           default:
       }
    } catch(err) {
        console.log('Failed to track event (probably local):', e.label);
    }
}