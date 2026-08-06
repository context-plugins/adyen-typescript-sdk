
# Store and Forward

*This model accepts additional fields of type unknown.*

## Structure

`StoreAndForward`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxAmount` | [`MinorUnitsMonetaryValue[] \| undefined`](../../doc/models/minor-units-monetary-value.md) | Optional | The maximum amount that the terminal accepts for a single store-and-forward payment. |
| `maxPayments` | `number \| undefined` | Optional | The maximum number of store-and-forward transactions per terminal that you can process while offline. |
| `supportedCardTypes` | [`SupportedCardTypes \| undefined`](../../doc/models/supported-card-types.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { StoreAndForward } from 'adyen';

const storeAndForward: StoreAndForward = {
  maxAmount: [
    {
      amount: 50,
      currencyCode: 'currencyCode4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  maxPayments: 110,
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

