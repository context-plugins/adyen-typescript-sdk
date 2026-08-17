
# Network Reason

## Structure

`NetworkReason`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code provided by the network. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | [`NamespaceEnum \| undefined`](../../doc/models/namespace-enum.md) | Optional | The namespace that corresponds to the reason code.<br><br>Possible values:<br><br>* **ukFpsRejectionCode**<br>* **ukFpsReturnReasonCode**<br>* **usAchReturnReasonCode**<br>* **iso8583ResponseCode** |

## Example

```ts
import { NamespaceEnum, NetworkReason } from 'adyen';

const networkReason: NetworkReason = {
  code: 'code0',
  description: 'description2',
  namespace: NamespaceEnum.UkFpsReturnReasonCode,
};
```

