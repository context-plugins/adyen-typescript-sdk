
# Reversal Reason 1

Reason of the payment or loyalty reversal.
Possible values:

* **CustCancel**
* **Malfunction**
* **MerchantCancel**
* **Unable2Compl**

## Enumeration

`ReversalReason1`

## Fields

| Name |
|  --- |
| `CustCancel` |
| `MerchantCancel` |
| `Malfunction` |
| `Unable2Compl` |

## Example

```ts
import { ReversalReason1 } from 'adyen';

const reversalReason1 = ReversalReason1.Malfunction;
```

