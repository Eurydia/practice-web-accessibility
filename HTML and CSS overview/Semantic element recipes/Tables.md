# Tables

> [!cite] Citation
> 
> - [HTML specification](https://html.spec.whatwg.org/multipage/tables.html)
> - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

## Common practices

### Adding collapsible caption

A `details` element and a `summary` element may be placed in the `caption` element of a table to provide a collapsible caption.

The practice of placing a `details` and a `summary` element in a `caption` element is demonstrated in HTML specification.

An example is given on [4.9.1.1 Techniques for describing tables (HTML  specification)](https://html.spec.whatwg.org/multipage/tables.html#table-descriptions-techniques) section.

### Adding header column

A `th` element may be added as the first child of `tr` elements in `tbody`, which create a header column.

In such tables, the top-left header cell is left empty.

This example is shown in [4.9.2 The caption element (HTML specification)](https://html.spec.whatwg.org/multipage/tables.html#the-caption-element) section.

### Omitting footer

A table may omit its `tfoot` element if it does not need summary rows for its column.

Through out the [HTML specification](https://html.spec.whatwg.org/multipage/tables.html) many examples omit the footer.

## Recipes

Every table shown here have a `caption` element, a `thead`, and a `tbody` element.

### Typical table

This table consists of a `caption` element, a `thead` element, a `tbody` element, and a `tfooter` element.
It has a header row and a header column.

Since this table has a header row and a header column, the top left header cell should be left empty.

```html
<table>
	<caption>
		<p></p>
	</caption>
	<thead>
		<tr>
			<th><!-- top-left cell is left empty --></th>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
		</tr>
	</thead>
		<tbody>
			<tr>
				<th scope="row"></th>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		<tr>
			<th scope="row"></th>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th scope="row"></th>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<th scope="row"></th>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tfoot>
</table>
```

### Typical table without a header column

This table consists of a `caption` element, a `thead` element, a `tbody` element, and a `tfooter` element. It has a header row but it does not have a header column.

```html
<table>
	<caption>
		<p></p>
	</caption>
	<thead>
		<tr>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col"></th>
		</tr>
	</thead>
		<tbody>
			<tr>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		</tbody>
	<tfoot>
		<tr>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tfoot>
</table>
```

