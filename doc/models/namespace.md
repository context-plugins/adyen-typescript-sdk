
# Namespace

The namespace that corresponds to the reason code.

Possible values:

* **ukFpsRejectionCode**
* **ukFpsReturnReasonCode**
* **usAchReturnReasonCode**
* **iso8583ResponseCode**

## Enumeration

`Namespace`

## Fields

| Name |
|  --- |
| `Iso8583ResponseCode` |
| `UkFpsRejectionCode` |
| `UkFpsReturnReasonCode` |
| `UsAchReturnReasonCode` |

## Example

```ts
import { Namespace } from 'adyen';

const namespace = Namespace.UkFpsReturnReasonCode;
```

