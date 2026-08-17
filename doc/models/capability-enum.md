
# Capability Enum

## Enumeration

`CapabilityEnum`

## Fields

| Name |
|  --- |
| `AcceptExternalFunding` |
| `AcceptPspFunding` |
| `AcceptTransactionInRestrictedCountries` |
| `AcceptTransactionInRestrictedCountriesCommercial` |
| `AcceptTransactionInRestrictedCountriesConsumer` |
| `AcceptTransactionInRestrictedIndustries` |
| `AcceptTransactionInRestrictedIndustriesCommercial` |
| `AcceptTransactionInRestrictedIndustriesConsumer` |
| `Acquiring` |
| `AtmWithdrawal` |
| `AtmWithdrawalCommercial` |
| `AtmWithdrawalConsumer` |
| `AtmWithdrawalInRestrictedCountries` |
| `AtmWithdrawalInRestrictedCountriesCommercial` |
| `AtmWithdrawalInRestrictedCountriesConsumer` |
| `AuthorisedPaymentInstrumentUser` |
| `GetGrantOffers` |
| `IssueBankAccount` |
| `IssueCard` |
| `IssueCardCommercial` |
| `IssueCardConsumer` |
| `IssueChargeCard` |
| `IssueChargeCardCommercial` |
| `IssueCreditLimit` |
| `LocalAcceptance` |
| `Payout` |
| `PayoutToTransferInstrument` |
| `Processing` |
| `ReceiveFromBalanceAccount` |
| `ReceiveFromPlatformPayments` |
| `ReceiveFromThirdParty` |
| `ReceiveFromTransferInstrument` |
| `ReceiveGrants` |
| `ReceivePayments` |
| `SendToBalanceAccount` |
| `SendToThirdParty` |
| `SendToTransferInstrument` |
| `ThirdPartyFunding` |
| `UseCard` |
| `UseCardCommercial` |
| `UseCardConsumer` |
| `UseCardInRestrictedCountries` |
| `UseCardInRestrictedCountriesCommercial` |
| `UseCardInRestrictedCountriesConsumer` |
| `UseCardInRestrictedIndustries` |
| `UseCardInRestrictedIndustriesCommercial` |
| `UseCardInRestrictedIndustriesConsumer` |
| `UseChargeCard` |
| `UseChargeCardCommercial` |
| `WithdrawFromAtm` |
| `WithdrawFromAtmCommercial` |
| `WithdrawFromAtmConsumer` |
| `WithdrawFromAtmInRestrictedCountries` |
| `WithdrawFromAtmInRestrictedCountriesCommercial` |
| `WithdrawFromAtmInRestrictedCountriesConsumer` |

## Example

```ts
import { CapabilityEnum } from 'adyen';

const capability = CapabilityEnum.Payout;
```

