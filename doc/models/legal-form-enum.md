
# Legal Form Enum

The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.

The possible values depend on the `type`.

- For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.

- For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**

## Enumeration

`LegalFormEnum`

## Fields

| Name |
|  --- |
| `CashManagementTrust` |
| `CorporateUnitTrust` |
| `DeceasedEstate` |
| `DiscretionaryInvestmentTrust` |
| `DiscretionaryServicesManagementTrust` |
| `DiscretionaryTradingTrust` |
| `FirstHomeSaverAccountsTrust` |
| `FixedTrust` |
| `FixedUnitTrust` |
| `HybridTrust` |
| `ListedPublicUnitTrust` |
| `OtherTrust` |
| `PooledSuperannuationTrust` |
| `PublicTradingTrust` |
| `UnlistedPublicUnitTrust` |
| `LimitedPartnership` |
| `FamilyPartnership` |
| `OtherPartnership` |

## Example

```ts
import { LegalFormEnum } from 'adyen';

const legalForm = LegalFormEnum.DeceasedEstate;
```

