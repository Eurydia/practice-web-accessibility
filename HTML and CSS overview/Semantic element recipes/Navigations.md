# Navigations

> [!cite] Citation
> 
> - [HTML specification](https://html.spec.whatwg.org/multipage/sections.html#the-nav-element)
> - [nav element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
> - [ul element (MDN docs)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

## Common practices

### Primary navigation

In the primary navigation, each link should be a child of a `ul` element.

### Breadcrumbs

In breadcrumbs, each link should be a child of a `ol` element.

## Recipes

### Primary navigation

A simple primary navigation consists of a `ul` element and its list items.

```html
<nav>
	<ul>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
	</ul>
</nav>
```

### Simple breadcrumbs

A simple breadcrumb consists of a `ol` element and its list items.

```html
<nav>
	<ol>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
		<li>
			<a href="address/to/page" hreflang="en">page</a>
		</li>
	</ol>
</nav>
```
