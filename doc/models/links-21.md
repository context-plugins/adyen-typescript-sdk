
# Links 21

Contains links to the next and previous page whenever applicable.

## Structure

`Links21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `next` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | Contains a link to the next page. |
| `prev` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | Contains a link to the previous page. |

## Example

```ts
import { Links21 } from 'adyen';

const links21: Links21 = {
  next: {
    href: 'href4',
  },
  prev: {
    href: 'href8',
  },
};
```

