
# Reason 2

The reason for the transfer status.

## Enumeration

`Reason2`

## Fields

| Name |
|  --- |
| `AccountHierarchyNotActive` |
| `AmountLimitExceeded` |
| `ApprovalExpired` |
| `Approved` |
| `AvsDeclined` |
| `BalanceAccountTemporarilyBlockedByTransactionRule` |
| `BlockCard` |
| `CallReferral` |
| `Cancelled` |
| `CaptureCard` |
| `CardExpired` |
| `CardholderAuthenticationRequired` |
| `CashbackAmountExceedsLimit` |
| `CavvDeclined` |
| `ContactlessFallback` |
| `ContactlessLimitReached` |
| `CounterpartyAccountBlocked` |
| `CounterpartyAccountClosed` |
| `CounterpartyAccountNotFound` |
| `CounterpartyAddressRequired` |
| `CounterpartyBankTimedOut` |
| `CounterpartyBankUnavailable` |
| `CryptographicFailure` |
| `CvcDeclined` |
| `Declined` |
| `DeclinedByBapValidation` |
| `DeclinedByTransactionRule` |
| `DeclinedNonGeneric` |
| `DirectDebitNotSupported` |
| `DoNotHonor` |
| `DomesticDebitTransactionNotAllowed` |
| `DuplicateTransmissionDetected` |
| `Error` |
| `FormatError` |
| `Fraud` |
| `FraudCancelled` |
| `HonorWithId` |
| `InternalTimeout` |
| `InvalidAccount` |
| `InvalidAmount` |
| `InvalidAuthorizationLifeCycle` |
| `InvalidCard` |
| `InvalidExpiryDate` |
| `InvalidFromAccount` |
| `InvalidIssuer` |
| `InvalidMerchant` |
| `InvalidPin` |
| `InvalidToAccount` |
| `InvalidTransaction` |
| `IssuerSuspectedFraud` |
| `LostCard` |
| `MobilePinRequired` |
| `NoCheckingAccount` |
| `NoSavingsAccount` |
| `Not3DAuthenticated` |
| `NotEnoughBalance` |
| `NotSubmitted` |
| `NotSupported` |
| `PartiallyApproved` |
| `Pending` |
| `PendingApproval` |
| `PendingExecution` |
| `PinNotChanged` |
| `PinRequired` |
| `PinTriesExceeded` |
| `PinValidationNotPossible` |
| `PurchaseAmountOnlyNoCashBack` |
| `RefusedByCounterpartyBank` |
| `RefusedByCustomer` |
| `RestrictedCard` |
| `RevocationOfAuth` |
| `RouteNotFound` |
| `ScaAuthenticationRequired` |
| `ScaFailed` |
| `SchemeAdvice` |
| `SecurityViolation` |
| `ShopperCancelled` |
| `StolenCard` |
| `ThreedsDynamicLinkingMismatch` |
| `TransactionNotPermitted` |
| `TransferInstrumentDoesNotExist` |
| `UnableToRouteTransaction` |
| `Unknown` |
| `WithdrawalAmountExceeded` |
| `WithdrawalCountExceeded` |

## Example

```ts
import { Reason2 } from 'adyen';

const reason2 = Reason2.InvalidAuthorizationLifeCycle;
```

