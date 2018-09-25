/* global $AD*/
export let tracked_events = {
    EXAMPLE_TRACKED_EVENT: {label: 'example tracked event'},
    TAP_TO_WEBSITE: {label: 'tap to website', url: 'http://www.oath.com'}
};

/**
 * Track clicks
 */
export function trackClick(e) {
    console.log('%c Tracking: '+ e.label +' ', 'background: #ffcc00; color: #000000');
    console.log('', e.hasOwnProperty('url'));
    try {
        if (e.hasOwnProperty('url')) {
            $AD.click(e.label, e.url);
        } else {
            $AD.click(e.label);
        }
    } catch(err) {
        console.log('Failed to track click:', e.label);
    }
}