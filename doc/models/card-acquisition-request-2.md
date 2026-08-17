
# Card Acquisition Request 2

Content of the Card Acquisition Request message.

## Structure

`CardAcquisitionRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `cardAcquisitionTransaction` | [`CardAcquisitionTransaction1`](../../doc/models/card-acquisition-transaction-1.md) | Required | Data related to the payment and loyalty card acquisition. |

## Example

```ts
import {
  CardAcquisitionRequest2,
  ForceEntryModeEnum,
  LoyaltyHandling2Enum,
} from 'adyen';

const cardAcquisitionRequest2: CardAcquisitionRequest2 = {
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

