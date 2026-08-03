
# Network Reason 2

Contains information that explains why the transfer was rejected or returned by the network.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkReason2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code provided by the network. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | [`Namespace \| undefined`](../../doc/models/namespace.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Namespace, NetworkReason2 } from 'adyenlib';

const networkReason2: NetworkReason2 = {
  code: 'code4',
  description: 'description6',
  namespace: Namespace.UkFpsReturnReasonCode,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

