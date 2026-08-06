
# Account Type 3

Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.
Possible values:

* **Default**
* **Savings**
* **Checking**
* **CreditCard**
* **Universal**
* **Investment**
* **CardTotals**
* **EpurseCard**

## Enumeration

`AccountType3`

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
import { AccountType3 } from 'adyen';

const accountType3 = AccountType3.Checking;
```

