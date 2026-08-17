
# Funding Source 1 Enum

The funding source of the payment method.

Possible values:

* **credit**
* **debit**
* **prepaid**
* **deferred_debit**
* **charged**
* **ANY**

## Enumeration

`FundingSource1Enum`

## Fields

| Name |
|  --- |
| `Charged` |
| `Credit` |
| `Debit` |
| `DeferredDebit` |
| `Prepaid` |
| `ANY` |

## Example

```ts
import { FundingSource1Enum } from 'adyen';

const fundingSource1 = FundingSource1Enum.Charged;
```

