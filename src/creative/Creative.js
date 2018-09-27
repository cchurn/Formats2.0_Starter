/*global*/
import Display from './Display';
import Layout from '../core/Layout';
import loadJS from 'load-js';
import lazyLoadCSS from 'lazyload-css';
import LazyLoader from '../core/LazyLoading';

var creative = {
    defaults: {
        container: '.container'
    },
    options: {},
    config: {container: '', responsive: false, width: 320, height: 568},
    init: function(opts) {

        for(var i in opts) {
            this.options[i] = {
                value: opts[i],
                enumerable: true,
                writeable: true,
                configurable: true
            }
        }
        this.config = Object.create(this.defaults, this.options);
        console.log('creative init', this.config);
        let layout = new Layout();
        if (this.config.responsive) {
            layout.init(this.config);
        } else {
            document.querySelector(this.config.container).style.width = this.config.width + 'px';
            document.querySelector(this.config.container).style.height = this.config.height + 'px';
        }

        /**
         * Lazy loading
         * If any JS or CSS files are passed via the config they'll be loaded here
         * before Display.js starts
         */
        let arr_scripts = this.config.lazyLoad;
        let loadJSArray = [];
        let loadCSSArray = [];
        let hasInit;
        if (arr_scripts && arr_scripts.length) {
            for (let value of arr_scripts) {
                switch (value.split('.').pop()) {
                    case 'js':
                        let loadObj = {async: false, url: value};
                        loadJSArray.push(loadObj);
                        break;
                    case 'css':
                        const promise = lazyLoadCSS(value);
                        loadCSSArray.push(promise);
                        break;
                }
            }
            Promise.all(loadCSSArray).then(res => console.log(res));
            loadJS( loadJSArray )
                .then(() => {
                    console.log("lazy loaded " + arr_scripts.length + " scripts");
                    if (layout.isPortrait()) {
                        this.startDisplay();
                    } else {
                        // this prevents initialising until in portrait aspect
                        layout.on('layout_resize', ()=> {
                            if (hasInit) return;
                            if (layout.isPortrait()) {
                                hasInit = true;
                                this.startDisplay();
                            }
                        });
                    }
                });
        }
        // end lazy loading
        else {
            this.startDisplay();
        }
    },
    startDisplay: function() {
        let display = new Display();
        display.init(this.config);
    }
};


export default creative;