
# Type 171 Enum

Type of trust.

See possible values for trusts in [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia) and [New Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).

## Enumeration

`Type171Enum`

## Fields

| Name |
|  --- |
| `BusinessTrust` |
| `CashManagementTrust` |
| `CharitableTrust` |
| `CorporateUnitTrust` |
| `DeceasedEstate` |
| `DiscretionaryTrust` |
| `DiscretionaryInvestmentTrust` |
| `DiscretionaryServicesManagementTrust` |
| `DiscretionaryTradingTrust` |
| `FamilyTrust` |
| `FirstHomeSaverAccountsTrust` |
| `FixedTrust` |
| `FixedUnitTrust` |
| `HybridTrust` |
| `ListedPublicUnitTrust` |
| `OtherTrust` |
| `PooledSuperannuationTrust` |
| `PublicTradingTrust` |
| `UnlistedPublicUnitTrust` |

## Example

```ts
import { Type171Enum } from 'adyen';

const type171 = Type171Enum.CharitableTrust;
```

