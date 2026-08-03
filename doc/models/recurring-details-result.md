
# Recurring Details Result

*This model accepts additional fields of type unknown.*

## Structure

`RecurringDetailsResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creationDate` | `string \| undefined` | Optional | The date when the recurring details were created. |
| `details` | [`RecurringDetailWrapper[] \| undefined`](../../doc/models/recurring-detail-wrapper.md) | Optional | Payment details stored for recurring payments. |
| `lastKnownShopperEmail` | `string \| undefined` | Optional | The most recent email for this shopper (if available). |
| `shopperReference` | `string \| undefined` | Optional | The reference you use to uniquely identify the shopper (e.g. user ID or account ID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecurringDetailsResult } from 'adyenlib';

const recurringDetailsResult: RecurringDetailsResult = {
  creationDate: '2016-03-13T12:52:32.123Z',
  details: [
    {
      recurringDetail: {
        recurringDetailReference: 'recurringDetailReference2',
        variant: 'variant6',
        additionalData: {
          'key0': 'additionalData2'
        },
        alias: 'alias4',
        aliasType: 'aliasType6',
        bank: {
          bankAccountNumber: 'bankAccountNumber8',
          bankCity: 'bankCity0',
          bankLocationId: 'bankLocationId2',
          bankName: 'bankName4',
          bic: 'bic0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        billingAddress: {
          city: 'city8',
          country: 'country6',
          houseNumberOrName: 'houseNumberOrName0',
          postalCode: 'postalCode6',
          street: 'street2',
          stateOrProvince: 'stateOrProvince0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  lastKnownShopperEmail: 'lastKnownShopperEmail0',
  shopperReference: 'shopperReference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

