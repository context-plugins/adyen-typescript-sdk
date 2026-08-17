
# Namespace Enum

The namespace that corresponds to the reason code.

Possible values:

* **ukFpsRejectionCode**
* **ukFpsReturnReasonCode**
* **usAchReturnReasonCode**
* **iso8583ResponseCode**

## Enumeration

`NamespaceEnum`

## Fields

| Name |
|  --- |
| `Iso8583ResponseCode` |
| `UkFpsRejectionCode` |
| `UkFpsReturnReasonCode` |
| `UsAchReturnReasonCode` |

## Example

```ts
import { NamespaceEnum } from 'adyen';

const namespace = NamespaceEnum.UkFpsReturnReasonCode;
```

