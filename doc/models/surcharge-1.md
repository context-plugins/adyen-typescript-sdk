
# Surcharge 1

## Structure

`Surcharge1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `askConfirmation` | `boolean \| undefined` | Optional | Show the surcharge details on the terminal, so the shopper can confirm. |
| `configurations` | [`MConfiguration[] \| undefined`](../../doc/models/m-configuration.md) | Optional | Surcharge fees or percentages for specific cards, funding sources (credit or debit), and currencies. |
| `disclosureOnPresentCard` | `boolean \| undefined` | Optional | Show the maximum surcharge rate to the shopper on the present card screen before they tap. |
| `excludeGratuityFromSurcharge` | `boolean \| undefined` | Optional | Exclude the tip amount from the surcharge calculation. |

## Example

```ts
import { Surcharge1 } from 'adyen';

const surcharge1: Surcharge1 = {
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
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
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
    },
    {
      brand: 'brand4',
      currencies: [
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
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
    },
    {
      brand: 'brand4',
      currencies: [
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
        },
        {
          currencyCode: 'currencyCode6',
          amount: 208,
          maxAmount: 98,
          percentage: 191.04,
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
    }
  ],
  disclosureOnPresentCard: false,
  excludeGratuityFromSurcharge: false,
};
```

