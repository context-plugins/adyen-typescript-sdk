
# Account Type 13

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

`AccountType13`

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
import { AccountType13 } from 'adyenlib';

const accountType13 = AccountType13.Default;
```

