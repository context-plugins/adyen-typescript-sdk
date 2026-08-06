
# Type 2

The type of check.

Possible values:

* **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.

* **COMPANY_VERIFICATION**

* **CARD_VERIFICATION**

* **IDENTITY_VERIFICATION**

* **LEGAL_ARRANGEMENT_VERIFICATION**

* **NONPROFIT_VERIFICATION**

* **PASSPORT_VERIFICATION**

* **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.

* **PCI_VERIFICATION**

## Enumeration

`Type2`

## Fields

| Name |
|  --- |
| `BankAccountVerification` |
| `CardVerification` |
| `CompanyVerification` |
| `IdentityVerification` |
| `LegalArrangementVerification` |
| `NonprofitVerification` |
| `PassportVerification` |
| `PayoutMethodVerification` |
| `PciVerification` |

## Example

```ts
import { Type2 } from 'adyen';

const type2 = Type2.NonprofitVerification;
```

