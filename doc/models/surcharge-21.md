
# Surcharge 21

Settings for payment [surcharge](https://docs.adyen.com/point-of-sale/surcharge) features.

*This model accepts additional fields of type unknown.*

## Structure

`Surcharge21`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `askConfirmation` | `boolean \| undefined` | Optional | Show the surcharge details on the terminal, so the shopper can confirm. |
| `configurations` | [`MConfiguration[] \| undefined`](../../doc/models/m-configuration.md) | Optional | Surcharge fees or percentages for specific cards, funding sources (credit or debit), and currencies. |
| `disclosureOnPresentCard` | `boolean \| undefined` | Optional | Show the maximum surcharge rate to the shopper on the present card screen before they tap. |
| `excludeGratuityFromSurcharge` | `boolean \| undefined` | Optional | Exclude the tip amount from the surcharge calculation. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Surcharge21 } from 'adyen';

const surcharge21: Surcharge21 = {
  askConfirmation: false,
  configurations: [
    {
      brand: 'brand4',
      currencies: [
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      commercial: false,
      country: [
        'country1',
        'country2'
      ],
      sources: [
        'sources8',
        'sources9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      brand: 'brand4',
      currencies: [
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      commercial: false,
      country: [
        'country1',
        'country2'
      ],
      sources: [
        'sources8',
        'sources9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      brand: 'brand4',
      currencies: [
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      commercial: false,
      country: [
        'country1',
        'country2'
      ],
      sources: [
        'sources8',
        'sources9'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  disclosureOnPresentCard: false,
  excludeGratuityFromSurcharge: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

