
# Network Reason 2

Contains information that explains why the transfer was rejected or returned by the network.

## Structure

`NetworkReason2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code provided by the network. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | [`NamespaceEnum \| undefined`](../../doc/models/namespace-enum.md) | Optional | The namespace that corresponds to the reason code.<br><br>Possible values:<br><br>* **ukFpsRejectionCode**<br>* **ukFpsReturnReasonCode**<br>* **usAchReturnReasonCode**<br>* **iso8583ResponseCode** |

## Example

```ts
import { NamespaceEnum, NetworkReason2 } from 'adyen';

const networkReason2: NetworkReason2 = {
  code: 'code4',
  description: 'description6',
  namespace: NamespaceEnum.UkFpsReturnReasonCode,
};
```

