
# Ship Name Indicator Enum

Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.
Allowed values:

* **01** — Account Name identical to shipping Name
* **02** — Account Name different to shipping Name, Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.
  Allowed values:
* **01** — No suspicious activity has been observed
* **02** — Suspicious activity has been observed

## Enumeration

`ShipNameIndicatorEnum`

## Fields

| Name |
|  --- |
| `Enum01` |
| `Enum02` |

## Example

```ts
import { ShipNameIndicatorEnum } from 'adyen';

const shipNameIndicator = ShipNameIndicatorEnum.Enum01;
```

