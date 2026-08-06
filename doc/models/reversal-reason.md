
# Reversal Reason

Reason of the payment or loyalty reversal.
Possible values:

* **CustCancel**
* **MerchantCancel**
* **Malfunction**
* **Unable2Compl**

## Enumeration

`ReversalReason`

## Fields

| Name |
|  --- |
| `CustCancel` |
| `MerchantCancel` |
| `Malfunction` |
| `Unable2Compl` |

## Example

```ts
import { ReversalReason } from 'adyen';

const reversalReason = ReversalReason.CustCancel;
```

