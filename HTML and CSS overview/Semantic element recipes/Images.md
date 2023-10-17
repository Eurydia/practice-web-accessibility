# Images

> [!cite] Citation
> 
> - [HTML specification](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)
> - [img element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
> - [picture element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

## Common practices

### Adding alternative text

A descriptive alternative text must be given on an image as a fall back in case the image fails to load.

## Recipes

### Simple image

The simplest form that an image can take consists of an image source and an alternative text.

```html
<img src="address/to/image.png" alt="textual description" /> 
```

### Image with alternative sources

A `picture` element is a container.
It contains an `image` element and one or more `source` elements.

It offers alternative sources for the same image for different displays.

Note that the `img` element must be the last child of a `picture` element.

```html
<picture>
	<source srcset="address/of/img.avif" type="image/avif" />
  <source srcset="address/of/img.webp" type="image/webp" />
  <img src="address/of/img.jpg" alt="image description" />
</picture>
```