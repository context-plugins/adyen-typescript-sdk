
# Reversal Reason Enum

Reason of the payment or loyalty reversal.
Possible values:

* **CustCancel**
* **MerchantCancel**
* **Malfunction**
* **Unable2Compl**

## Enumeration

`ReversalReasonEnum`

## Fields

| Name |
|  --- |
| `CustCancel` |
| `MerchantCancel` |
| `Malfunction` |
| `Unable2Compl` |

## Example

```ts
import { ReversalReasonEnum } from 'adyen';

const reversalReason = ReversalReasonEnum.CustCancel;
```

