
# Formats 2.0 One Creative Starter

This is a starter project for One Creative builds with Formats 2.0 templates. It's based on [create-react-app](https://github.com/facebook/create-react-app) which is built on [Webpack](https://webpack.js.org/). 


### Features  
 - Fixed or responsive layout  
 - Sass integration  
 - CSS prefixing  
 - TinyPNG image compression  
 - JS, HTML, CSS minification  
 - All files zipped into a single upload for One Creative  
 - Localhost development server with live reloading on any changes  
 - Various build configurations including  
   - Inline images and CSS (all in the JS file and base64 encoded)  
   - Inline images and external CSS   
   - External CSS and images  
 - Approx 30kb base file size   
 - Modular structure for JS and CSS  
 - Lazy loading of external libraries

This basic example is at https://onecreative.aol.com/#ad:401656

# Usage
### Clone this repository and install dependencies

    git clone https://github.com/cchurn/Formats2.0_Starter.git your_project_name
    cd [your_project_name]
    npm install

### Start local development

    yarn start

This will create a local server on localhost (usually http://localhost:3000). Any changes to CSS, JS or HTML will update  as you go
### Build deployment file
Before deploying, choose a build config (instructions below)

    yarn build

This will compress everything including any images and produce a zip file name '**OneCreative.zip**'
This can then be uploaded to One Creative. 

# Choose a  build config
The contents of the file 

     /node_modules/react-scripts/config/webpack.config.prod.js 

 must be replaced by the contents of one of the config files in
 

    src/webpack_configs
For standard builds just use 'all_external.js'
# Set the unit configuration
This is done in 

    /public/index.html
Just update line 6

    <meta name="ad.size" content="width=300,height=600">
And set the config. If responsive is true the container will resize and reposition and the width and height must be set

    let configObj = {  
	    container:'#creative_container', // leave this
	    responsive: false, 
	    width: 300, height: 600
    };
# Start building

The main files to edit are 

    src/sass/_creative.scss
    src/js/creative/Display.js (this is the usual start point)
Images should be put in `/src/img` and can be referenced in css like this

    background-image: url("./img/bg.png");
Or in JS like this

    image.src = require('./img/bg.png);
Libraries can be imported like this (assuming they've been installed)

    // at the top of the file
    import $ from 'jquery';
    import  *  as  PIXI  from  'pixi.js';

Some of examples of this are in Display.js. All imports will add to the overall build size (main.js)
# Lazy loading
There are 3 ways to load external JS and CSS. Example Using jQuery 

 1. Include via script or  normal in index.html
 2. Install via npm and compile into main.js. 
    In terminal
    ```sh
    npm install jquery --save
    ```
    In your project
    ```sh
    import $ from 'jquery'; 
    ```
 3. If the compiled JS file is too large then you can lazy load any JS or CSS. This is done by passing the urls to the config object in index.html like this:
    ```sh
    let configObj = {
            container:'#creative_container',
            responsive: false,
            width: 300, height: 600,
            lazyLoad: [
                'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css'
            ]
        }; 
    ```
