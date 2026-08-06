
# Rates Calculate Response

*This model accepts additional fields of type unknown.*

## Structure

`RatesCalculateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exchangeCalculations` | [`CalculateRateResponseItem[] \| undefined`](../../doc/models/calculate-rate-response-item.md) | Optional | An array of objects, where each object returns a currency and value for which you performed an exchange calculation. You can use the calculated amounts in your payment requests. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RatesCalculateResponse } from 'adyen';

const ratesCalculateResponse: RatesCalculateResponse = {
  exchangeCalculations: [
    {
      appliedExchangeRate: 140.08,
      exchangeSide: 'exchangeSide0',
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      targetAmount: {
        currency: 'currency8',
        value: BigInt(168),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      type: 'type2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      appliedExchangeRate: 140.08,
      exchangeSide: 'exchangeSide0',
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      targetAmount: {
        currency: 'currency8',
        value: BigInt(168),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      type: 'type2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      appliedExchangeRate: 140.08,
      exchangeSide: 'exchangeSide0',
      sourceAmount: {
        currency: 'currency8',
        value: BigInt(232),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      targetAmount: {
        currency: 'currency8',
        value: BigInt(168),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      type: 'type2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

