
# Reversal Reason 1 Enum

Reason of the payment or loyalty reversal.
Possible values:

* **CustCancel**
* **Malfunction**
* **MerchantCancel**
* **Unable2Compl**

## Enumeration

`ReversalReason1Enum`

## Fields

| Name |
|  --- |
| `CustCancel` |
| `MerchantCancel` |
| `Malfunction` |
| `Unable2Compl` |

## Example

```ts
import { ReversalReason1Enum } from 'adyen';

const reversalReason1 = ReversalReason1Enum.Malfunction;
```

