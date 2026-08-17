
# Account Type Enum

Indicates the type of account. For example, for a multi-account card product.
Allowed values:

* notApplicable
* credit
* debit

## Enumeration

`AccountTypeEnum`

## Fields

| Name |
|  --- |
| `NotApplicable` |
| `Credit` |
| `Debit` |

## Example

```ts
import { AccountTypeEnum } from 'adyen';

const accountType = AccountTypeEnum.Debit;
```

