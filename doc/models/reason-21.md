
# Reason 21

Additional information about the status of the transfer.

## Enumeration

`Reason21`

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
import { Reason21 } from 'adyenlib';

const reason21 = Reason21.InvalidAmount;
```

