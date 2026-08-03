
# Network Reason

*This model accepts additional fields of type unknown.*

## Structure

`NetworkReason`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code provided by the network. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | [`Namespace \| undefined`](../../doc/models/namespace.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Namespace, NetworkReason } from 'adyenlib';

const networkReason: NetworkReason = {
  code: 'code0',
  description: 'description2',
  namespace: Namespace.UkFpsReturnReasonCode,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

