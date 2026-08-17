
# Account Verification Country 2 Enum

The location where the third-party individual's bank account is registered. Adyen uses this information to determine an available open banking provider, and to configure the open banking flow for that respective location.

## Enumeration

`AccountVerificationCountry2Enum`

## Fields

| Name |
|  --- |
| `SE` |
| `FI` |
| `NO` |
| `DK` |
| `NL` |
| `IT` |
| `DE` |
| `AT` |
| `ES` |
| `PT` |
| `FR` |
| `GB` |
| `BE` |
| `LV` |
| `LT` |
| `PL` |
| `EE` |
| `IE` |
| `US` |
| `CA` |
| `AU` |

## Example

```ts
import { AccountVerificationCountry2Enum } from 'adyen';

const accountVerificationCountry2 = AccountVerificationCountry2Enum.BE;
```

