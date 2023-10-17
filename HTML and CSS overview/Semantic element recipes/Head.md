# Head

> [!cite] Citation
> 
> - [head element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)


## Recipes

### Typical document head

A typical `head` document meta consists of an external stylesheet, a site favicon, a charset, site author, and viewport size.

```html
<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="author">  
	<link href="address/to/stylesheet.css" rel="stylesheet" />
	<link rel="icon" href="favicon.ico" />
	<title>Title of website</title>
</head>
```