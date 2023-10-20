# Main

> [!cite] Citation
> 
> - [HTML specification](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element)
> - [main element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
> - [header element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
> - [footer element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
> - [time element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

## Common practices

### Meta information in header

Introductory and navigational information is given in the `header` element.

### Meta information in footer

Authorial, related documents and copyright information is given in the `footer` element.

### Wrapping content in an article

The content of a `main` element may be wrapped in an `article` element.

```html
<main>
	<article></article>
</main>
```

## Recipes

### Simple main content 

A simple section contains a `header` element and a `footer` element.

```html
<main>
	<header>
		<h1>Title</h1>
		<p>Last updated: <date datetime="">Time</date>.</p>
	</header>
	<p>Content</p>
	<footer><p>Author: Name</p></footer>
</main>
```

### Main content without footer

A simple section contains a `header` element and some content, but does not include a `footer` element.

```html
<main>
	<header>
		<h1>Title</h1>
		<p>Last updated: <date datetime="">Time</date>.</p>
	</header>
	<p>Content</p>
</main>
```
