/*global TweenMax Linear*/
import {EventEmitter} from 'events';
// example imports (adds to bundle size)
// import $ from 'jquery';

class Display extends EventEmitter {
    init(config) {
        // start here
        TweenMax.to('body', 1, {alpha: 1});
    }
}
export default Display;