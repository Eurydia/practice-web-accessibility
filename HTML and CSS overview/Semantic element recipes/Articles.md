# Articles

> [!cite] Citation
> 
> - [HTML specification](https://html.spec.whatwg.org/multipage/sections.html#the-article-element)
> - [article element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
> - [header element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)
> - [footer element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)
> - [time element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

## Common practices

### Article header information

Introductory and navigational information is given in the `header` element.

### Article footer information

Authorial, related documents and copyright information is given in the `footer` element.

## Recipes

### Simple article 

A simple article contains a `header` element and a `footer` element.

```html
<article>
	<header>
		<h1>Title</h1>
		<p>Last updated: <date datetime="">Time</date>.</p>
	</header>
	<p>Content</p>
	<footer>
		<p>Author</p>
	</footer>
</article>
```

### Article without footer

A simple article contains a `header` element and content, but does not include a `footer` element.

```html
<article>
	<header>
		<h1>Title</h1>
		<p>Last updated: <date datetime="">Time</date>.</p>
	</header>
	<p>Content</p>
</article>
```
