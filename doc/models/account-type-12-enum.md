
# Account Type 12 Enum

Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.
Possible values:

* **CardTotals**
* **Checking**
* **CreditCard**
* **Default**
* **EpurseCard**
* **Investment**
* **Savings**
* **Universal**

## Enumeration

`AccountType12Enum`

## Fields

| Name |
|  --- |
| `Default` |
| `Savings` |
| `Checking` |
| `CreditCard` |
| `Universal` |
| `Investment` |
| `CardTotals` |
| `EpurseCard` |

## Example

```ts
import { AccountType12Enum } from 'adyen';

const accountType12 = AccountType12Enum.CardTotals;
```

