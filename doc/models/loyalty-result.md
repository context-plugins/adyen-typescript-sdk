
# Loyalty Result

Data related to the result of a processed loyalty transaction.
In the Message Response, the result of each loyalty brand transaction.

## Structure

`LoyaltyResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAccount` | [`LoyaltyAccount1`](../../doc/models/loyalty-account-1.md) | Required | Data related to a loyalty account processed in the transaction. |
| `currentBalance` | `number \| undefined` | Optional | Balance of an account.<br>If known (provided by the card or an external host).<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `loyaltyAcquirerData` | [`LoyaltyAcquirerData1 \| undefined`](../../doc/models/loyalty-acquirer-data-1.md) | Optional | Data related to the loyalty Acquirer during a loyalty transaction.<br>If content not empty. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyResult,
} from 'adyen';

const loyaltyResult: LoyaltyResult = {
  loyaltyAccount: {
    loyaltyAccountID: {
      entryMode: [
        EntryModeEnum.File
      ],
      identificationType: IdentificationType11Enum.ISOTrack2,
      loyaltyID: 'LoyaltyID4',
      identificationSupport: IdentificationSupport1Enum.HybridCard,
    },
    loyaltyBrand: 'LoyaltyBrand0',
  },
  currentBalance: 140.52,
  loyaltyAcquirerData: {
    loyaltyAcquirerID: 'LoyaltyAcquirerID4',
    approvalCode: 'ApprovalCode4',
    loyaltyTransactionID: {
      transactionID: 'TransactionID6',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    hostReconciliationID: 'HostReconciliationID4',
  },
};
```

