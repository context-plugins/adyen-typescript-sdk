
# Links 3

## Structure

`Links3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `next` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | Contains a link to the next page. |
| `prev` | [`LinksElement \| undefined`](../../doc/models/links-element.md) | Optional | Contains a link to the previous page. |

## Example

```ts
import { Links3 } from 'adyen';

const links3: Links3 = {
  next: {
    href: 'href4',
  },
  prev: {
    href: 'href8',
  },
};
```

