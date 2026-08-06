
# Financier

*This model accepts additional fields of type unknown.*

## Structure

`Financier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount64`](../../doc/models/amount-64.md) | Required | - |
| `firstName` | `string` | Required | The financier's first name. |
| `lastName` | `string` | Required | The financier's last name. |
| `location` | `string` | Required | The city and country/region where the financier is currently located. For example: Chicago, USA |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Financier } from 'adyen';

const financier: Financier = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  firstName: 'firstName0',
  lastName: 'lastName8',
  location: 'location8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

