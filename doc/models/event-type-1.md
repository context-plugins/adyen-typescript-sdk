
# Event Type 1

## Enumeration

`EventType1`

## Fields

| Name |
|  --- |
| `AccountClosed` |
| `AccountCreated` |
| `AccountFundsBelowThreshold` |
| `AccountHolderCreated` |
| `AccountHolderLimitReached` |
| `AccountHolderMigrated` |
| `AccountHolderPayout` |
| `AccountHolderStatusChange` |
| `AccountHolderStoreStatusChange` |
| `AccountHolderUpcomingDeadline` |
| `AccountHolderUpdated` |
| `AccountHolderVerification` |
| `AccountUpdated` |
| `BeneficiarySetup` |
| `CompensateNegativeBalance` |
| `DirectDebitInitiated` |
| `FundsMigrated` |
| `PaymentFailure` |
| `PendingCredit` |
| `RefundFundsTransfer` |
| `ReportAvailable` |
| `ScheduledRefunds` |
| `ScoreSignalTriggered` |
| `TransferFunds` |
| `TransferNotPaidoutTransfers` |

## Example

```ts
import { EventType1 } from 'adyen';

const eventType1 = EventType1.AccountHolderLimitReached;
```

