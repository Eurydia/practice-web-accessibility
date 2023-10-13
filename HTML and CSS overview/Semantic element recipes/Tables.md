# Tables

> [!cite] Citation
> - [HTML specification](https://html.spec.whatwg.org/multipage/tables.html)
> - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)

## Recipes

Every table shown here will have a `caption` element, a `thead`, and a `tbody` element with minor differences.

They can be categorized using a few characteristics:

**Adding collapsible caption**

A `details` element and a `summary` element can be placed in the `caption` element of a table to provide a collapsible caption.

**Adding header column**

A `th` element may be added as the first child of `tr` elements in `tbody`, which create a header column.

Note that the top-left header cell does not need to be filled in.

**Omitting footer**

The `tfoot` element of a table may be omitted.

### Typical table

This table consists of a `caption` element, a `thead` element, a `tbody` element, and a `tfooter` element.
It has a header row and a header column.

Since this table has a header row and a header column, the top left header cell should be left empty.

See a working example on CodePen: [CodePen example](https://codepen.io/Eurydia/pen/eYboRXB)

> [!Note] Additional variants
> 
> Note that the `details` element and `summary` element may be placed in `caption` element to provide a collapsible table caption.
> And `tfoot` may be omitted.

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

This variation of the [[#Typical table]] does not have a header column.

See a working example on CodePen: [CodePen example](https://codepen.io/Eurydia/pen/PoXgjXV)

> [!Note] Additional variants
> 
> Note that the `details` element and `summary` element may be placed in `caption` element to provide a collapsible table caption.
> And `tfoot` may be omitted.

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

