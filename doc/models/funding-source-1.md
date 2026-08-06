
# Funding Source 1

The funding source of the payment method.

Possible values:

* **credit**
* **debit**
* **prepaid**
* **deferred_debit**
* **charged**
* **ANY**

## Enumeration

`FundingSource1`

## Fields

| Name |
|  --- |
| `Charged` |
| `Credit` |
| `Debit` |
| `DeferredDebit` |
| `Prepaid` |
| `Any` |

## Example

```ts
import { FundingSource1 } from 'adyen';

const fundingSource1 = FundingSource1.Charged;
```

