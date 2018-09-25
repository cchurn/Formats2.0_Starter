/*global*/
import Display from './Display';
import Layout from '../core/Layout';

var creative = {
    defaults: {
        container: '.container'
    },
    options: {},
    config: {container: '', responsive: false, width: 320, height: 568},
    init: function(opts) {

        for(var i in opts){
            this.options[i] = {
                value: opts[i],
                enumerable: true,
                writeable: true,
                configurable: true
            }
        }
        this.config = Object.create(this.defaults, this.options);
        console.log('creative init', this.config);
        if (this.config.responsive) {
            let layout = new Layout();
            layout.init(this.config);
        } else {
            document.querySelector(this.config.container).style.width = this.config.width + 'px';
            document.querySelector(this.config.container).style.height = this.config.height + 'px';
        }
        let visualisation = new Display();
        visualisation.init(this.config);
    }
};


export default creative;