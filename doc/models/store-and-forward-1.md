
# Store and Forward 1

Settings for store-and-forward offline payments. The `maxAmount`, `maxPayments`, and `supportedCardTypes` parameters must be configured, either in the request or inherited from a higher level in your account structure.

*This model accepts additional fields of type unknown.*

## Structure

`StoreAndForward1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxAmount` | [`MinorUnitsMonetaryValue[] \| undefined`](../../doc/models/minor-units-monetary-value.md) | Optional | The maximum amount that the terminal accepts for a single store-and-forward payment. |
| `maxPayments` | `number \| undefined` | Optional | The maximum number of store-and-forward transactions per terminal that you can process while offline. |
| `supportedCardTypes` | [`SupportedCardTypes \| undefined`](../../doc/models/supported-card-types.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoreAndForward1 } from 'adyen';

const storeAndForward1: StoreAndForward1 = {
  maxAmount: [
    {
      amount: 50,
      currencyCode: 'currencyCode4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: 50,
      currencyCode: 'currencyCode4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: 50,
      currencyCode: 'currencyCode4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  maxPayments: 44,
  supportedCardTypes: {
    credit: false,
    debit: false,
    deferredDebit: false,
    prepaid: false,
    unknown: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

