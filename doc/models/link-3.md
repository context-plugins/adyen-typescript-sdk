
# Link 3

A list of hyperlinks to resources related to this response.

## Structure

`Link3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `first` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | The link to the first page of the list. |
| `last` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | The link to the last page of the list. |
| `next` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | The link to the next page of the list. |
| `previous` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | The link to the previous page of the list. |
| `self` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | The link to the list page you are currently viewing. |

## Example

```ts
import { Link3 } from 'adyen';

const link3: Link3 = {
  first: {
    href: 'href2',
  },
  last: {
    href: 'href2',
  },
  next: {
    href: 'href4',
  },
  previous: {
    href: 'href0',
  },
  self: {
    href: 'href0',
  },
};
```

