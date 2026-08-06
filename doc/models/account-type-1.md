
# Account Type 1

Indicates the type of account. For example, for a multi-account card product.
Allowed values:

* notApplicable
* credit
* debit

## Enumeration

`AccountType1`

## Fields

| Name |
|  --- |
| `NotApplicable` |
| `Credit` |
| `Debit` |

## Example

```ts
import { AccountType1 } from 'adyen';

const accountType1 = AccountType1.Debit;
```

