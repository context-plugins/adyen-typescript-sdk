
# Financier

## Structure

`Financier`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`PatchableAmountDTO`](../../doc/models/patchable-amount-dto.md) | Required | The amount of the funds the financier provided. |
| `firstName` | `string` | Required | The financier's first name. |
| `lastName` | `string` | Required | The financier's last name. |
| `location` | `string` | Required | The city and country/region where the financier is currently located. For example: Chicago, USA |

## Example

```ts
import { Financier } from 'adyen';

const financier: Financier = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  firstName: 'firstName0',
  lastName: 'lastName8',
  location: 'location8',
};
```

