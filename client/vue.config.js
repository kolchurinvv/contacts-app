module.exports = {
  configureWebpack: config => {
  	module: {
	    rules: [
	      // this will apply to both plain `.scss` files
	      // AND `<style lang="scss">` blocks in `.vue` files
	      {
	        test: /\.sass$/,
	        use: [
	          'vue-style-loader',
	          'css-loader',
	          {
	            loader: 'sass-loader',
	            options: {
	              indentedSyntax: true,
	            }
	          }
	        ]
	      },
	      {
			  test: /\.pug$/,
			  oneOf: [
			    // this applies to `<template lang="pug">` in Vue components
			    {
			      resourceQuery: /^\?vue/,
			      use: ['pug-plain-loader']
			    },
			    // this applies to pug imports inside JavaScript
			    {
			      use: ['raw-loader', 'pug-plain-loader', 'pug-html-loader']
			    }
			  ]
			}
	    ]
	  }
  }
};