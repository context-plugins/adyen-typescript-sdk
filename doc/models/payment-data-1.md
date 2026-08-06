
# Payment Data 1

Data related to the payment transaction.
If one data element is present.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentType` | [`PaymentType1 \| undefined`](../../doc/models/payment-type-1.md) | Optional | - |
| `splitPaymentFlag` | `boolean \| undefined` | Optional | Indicates if the payment of the Sale transaction is split. Allows the POI to decline payment means that cannot accept split payment.<br><br>**Default**: `false` |
| `requestedValidityDate` | `string \| undefined` | Optional | Requested validity date for the reservation. Allows a specific period for the reservation according to the need of the Merchant for the first reservation and the reservation updates as well. |
| `cardAcquisitionReference` | [`CardAcquisitionReference \| undefined`](../../doc/models/card-acquisition-reference.md) | Optional | - |
| `instalment` | [`Instalment \| undefined`](../../doc/models/instalment.md) | Optional | - |
| `paymentInstrumentData` | [`PaymentInstrumentData2 \| undefined`](../../doc/models/payment-instrument-data-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  InstalmentType,
  PaymentData1,
  PaymentType1,
  PeriodUnit1,
} from 'adyen';

const paymentData1: PaymentData1 = {
  paymentType: PaymentType1.OneTimeReservation,
  splitPaymentFlag: false,
  requestedValidityDate: '2016-03-13T12:52:32.123Z',
  cardAcquisitionReference: {
    transactionId: 'TransactionID8',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  instalment: {
    instalmentType: InstalmentType.DeferredInstalments,
    sequenceNumber: 106,
    planId: 'PlanID4',
    period: 70,
    periodUnit: PeriodUnit1.Monthly,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

