
# Account Age Indicator Enum

Indicator for the length of time since this shopper account was created in the merchant's environment.
Allowed values:

* notApplicable
* thisTransaction
* lessThan30Days
* from30To60Days
* moreThan60Days, Indicator when the shopper has changed their password.
  Allowed values:
* notApplicable
* thisTransaction
* lessThan30Days
* from30To60Days
* moreThan60Days, Indicator for the length of time since this payment method was added to this shopper's account.
  Allowed values:
* notApplicable
* thisTransaction
* lessThan30Days
* from30To60Days
* moreThan60Days

## Enumeration

`AccountAgeIndicatorEnum`

## Fields

| Name |
|  --- |
| `NotApplicable` |
| `ThisTransaction` |
| `LessThan30Days` |
| `From30To60Days` |
| `MoreThan60Days` |

## Example

```ts
import { AccountAgeIndicatorEnum } from 'adyen';

const accountAgeIndicator = AccountAgeIndicatorEnum.MoreThan60Days;
```

