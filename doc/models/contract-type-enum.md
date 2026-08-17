
# Contract Type Enum

The contract type of the grant offer. Possible value: **cashAdvance**, **loan**., The contract type of the offer.

Possible values:

* **loan**
* **cashAdvance**

## Enumeration

`ContractTypeEnum`

## Fields

| Name |
|  --- |
| `CashAdvance` |
| `Loan` |

## Example

```ts
import { ContractTypeEnum } from 'adyen';

const contractType = ContractTypeEnum.CashAdvance;
```

