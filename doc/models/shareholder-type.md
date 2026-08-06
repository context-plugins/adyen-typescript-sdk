
# Shareholder Type

Specifies how the person is associated with the account holder.

Possible values:

* **Owner**: Individuals who directly or indirectly own 25% or more of a company.

* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.

## Enumeration

`ShareholderType`

## Fields

| Name |
|  --- |
| `Controller` |
| `Owner` |
| `Signatory` |

## Example

```ts
import { ShareholderType } from 'adyen';

const shareholderType = ShareholderType.Owner;
```

