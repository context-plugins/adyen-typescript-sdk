
# Links Element 4

Generates a new client key, used to authenticate client-side requests. When you generate a new one, the existing key remains valid for 24 hours.

## Structure

`LinksElement4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |

## Example

```ts
import { LinksElement4 } from 'adyen';

const linksElement4: LinksElement4 = {
  href: 'href8',
};
```

