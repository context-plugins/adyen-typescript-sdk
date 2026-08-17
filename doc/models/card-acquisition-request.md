
# Card Acquisition Request

It conveys Information related to the payment and loyalty cards to read and analyse. This message pair is usually followed by a message pair (e.g. payment or loyalty) which refers to this Card Acquisition message pair.
Content of the Card Acquisition Request message.

## Structure

`CardAcquisitionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `cardAcquisitionTransaction` | [`CardAcquisitionTransaction1`](../../doc/models/card-acquisition-transaction-1.md) | Required | Data related to the payment and loyalty card acquisition. |

## Example

```ts
import {
  CardAcquisitionRequest,
  ForceEntryModeEnum,
  LoyaltyHandling2Enum,
} from 'adyen';

const cardAcquisitionRequest: CardAcquisitionRequest = {
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    operatorID: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceID: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupID: 'TotalsGroupID4',
    },
  },
  cardAcquisitionTransaction: {
    allowedPaymentBrand: [
      'AllowedPaymentBrand6',
      'AllowedPaymentBrand7'
    ],
    allowedLoyaltyBrand: [
      'AllowedLoyaltyBrand4'
    ],
    loyaltyHandling: LoyaltyHandling2Enum.Processed,
    customerLanguage: 'CustomerLanguage8',
    forceEntryMode: [
      ForceEntryModeEnum.ICC
    ],
  },
};
```

