
# Store and Forward 1

Settings for store-and-forward offline payments. The `maxAmount`, `maxPayments`, and `supportedCardTypes` parameters must be configured, either in the request or inherited from a higher level in your account structure.

## Structure

`StoreAndForward1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxAmount` | [`MinorUnitsMonetaryValue[] \| undefined`](../../doc/models/minor-units-monetary-value.md) | Optional | The maximum amount that the terminal accepts for a single store-and-forward payment. |
| `maxPayments` | `number \| undefined` | Optional | The maximum number of store-and-forward transactions per terminal that you can process while offline. |
| `supportedCardTypes` | [`SupportedCardTypes2 \| undefined`](../../doc/models/supported-card-types-2.md) | Optional | The type of card for which the terminal accepts store-and-forward payments. You can specify multiple card types. |

## Example

```ts
import { StoreAndForward1 } from 'adyen';

const storeAndForward1: StoreAndForward1 = {
  maxAmount: [
    {
      amount: 50,
      currencyCode: 'currencyCode4',
    },
    {
      amount: 50,
      currencyCode: 'currencyCode4',
    },
    {
      amount: 50,
      currencyCode: 'currencyCode4',
    }
  ],
  maxPayments: 44,
  supportedCardTypes: {
    credit: false,
    debit: false,
    deferredDebit: false,
    prepaid: false,
    unknown: false,
  },
};
```

