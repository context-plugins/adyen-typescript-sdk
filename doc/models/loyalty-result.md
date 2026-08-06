
# Loyalty Result

Data related to the result of a processed loyalty transaction.
In the Message Response, the result of each loyalty brand transaction.

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAccount` | [`LoyaltyAccount12`](../../doc/models/loyalty-account-12.md) | Required | - |
| `currentBalance` | `number \| undefined` | Optional | Balance of an account.<br>If known (provided by the card or an external host).<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `loyaltyAcquirerData` | [`LoyaltyAcquirerData \| undefined`](../../doc/models/loyalty-acquirer-data.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  LoyaltyResult,
} from 'adyen';

const loyaltyResult: LoyaltyResult = {
  loyaltyAccount: {
    loyaltyAccountId: {
      entryMode: [
        EntryMode.File
      ],
      identificationType: IdentificationType11.IsoTrack2,
      loyaltyId: 'LoyaltyID4',
      identificationSupport: IdentificationSupport1.HybridCard,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    loyaltyBrand: 'LoyaltyBrand0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  currentBalance: 140.52,
  loyaltyAcquirerData: {
    loyaltyAcquirerId: 'LoyaltyAcquirerID4',
    approvalCode: 'ApprovalCode4',
    loyaltyTransactionId: {
      transactionId: 'TransactionID6',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    hostReconciliationId: 'HostReconciliationID4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

