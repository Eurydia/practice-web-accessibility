# Figures

> [!cite] Sources
> 
> - [figure element (HTML specification)](https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element)
> - [figure element (MDN dics)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)

## Common practices

### Order of media and caption

The `figcaption` element of a `figure` element may be placed before or after the media.

## Recipes

### Image figure

A figure with an image followed by a caption.
See [[Images]] for addition recipes.

```html
<figure>
	<img alt="" src=""/>
	<figcaption></figcaption>
</figure>
```

### Video figure

A figure with a video followed by a caption.
See [[Videos]] for additional recipes.

```html
<figure>
	<video></video>
	<figcaption></figcaption>
</figure>
```

### Audio figure

A figure with an audio followed by a caption.

```html
<figure>
	<audio></audio>
	<figcaption></figcaption>
</figure>
```

### Table figure

A figure with a table followed by a caption.
See [[Tables]] for additional recipes.

```html
<figure>
	<table></table>
	<figcaption></figcaption>
</figure>
```