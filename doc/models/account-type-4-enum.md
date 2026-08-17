
# Account Type 4 Enum

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

`AccountType4Enum`

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
import { AccountType4Enum } from 'adyen';

const accountType4 = AccountType4Enum.Universal;
```

