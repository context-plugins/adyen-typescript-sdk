
# Route

*This model accepts additional fields of type unknown.*

## Structure

`Route`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | `string` | Required | The redirection link. You can use this link to redirect the user to the open banking flow when the user selects it.<br><br>**Constraints**: *Minimum Length*: `1` |
| `provider` | [`Provider`](../../doc/models/provider.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Route } from 'adyenlib';

const route: Route = {
  link: 'link2',
  provider: {
    logoUrl: 'logoURL6',
    name: 'name8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

