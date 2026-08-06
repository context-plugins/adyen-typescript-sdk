
# Network Token Requestor 2

The token requestor is an entity who requested tokenization of the card for secure payments.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkTokenRequestor2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The id of the network token requestor. |
| `name` | `string \| undefined` | Optional | The name of the network token requestor. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetworkTokenRequestor2 } from 'adyen';

const networkTokenRequestor2: NetworkTokenRequestor2 = {
  id: 'id0',
  name: 'name0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

