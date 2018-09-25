
# Formats 2.0 One Creative Starter

This is a starter project for One Creative builds with Formats 2.0 templates. It's based on [create-react-app](https://github.com/facebook/create-react-app) which is built on [Webpack](https://webpack.js.org/). 

### Features
  - Fixed or responsive layout
  - Sass integration
  - TinyPNG image compression
  - JS, HTML, CSS minification
  - All files zipped into a single upload for One Creative
  - Localhost development server with live reloading on any changes
  - Various build configurations including
	  - Inline images and CSS (all in the JS file)
	  - Inline images and external CSS 
	  - External CSS and images
  - Approx 20-30kb file size 



# Usage
### Clone this repository and install dependencies

    git clone https://github.com/cchurn/Formats2.0_Starter.git [your_project_name]
    cd [your_project_name]
    npm install

### Start local development

    yarn start

This will create a local server on localhost (usually http://localhost:3000). Any changes to CSS, JS or HTML will update  as you go
### Build deployment file
Before deploying, choose a build config (instructions below

    yarn build

This will compress everything including any images and produce a zip file name 'OneCreative.zip'
This can then be uploaded to One Creative. 

# Choose a  build config
The contents of the file 

     /node_modules/react-scripts/config/webpack.config.prod.js 

 must be replaced by the contents of one of the config files in
 

    src/webpack_configs
For standard builds just use 'all_external.js'