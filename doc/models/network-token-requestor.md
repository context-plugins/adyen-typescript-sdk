
# Network Token Requestor

*This model accepts additional fields of type unknown.*

## Structure

`NetworkTokenRequestor`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The id of the network token requestor. |
| `name` | `string \| undefined` | Optional | The name of the network token requestor. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetworkTokenRequestor } from 'adyenlib';

const networkTokenRequestor: NetworkTokenRequestor = {
  id: 'id0',
  name: 'name0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

