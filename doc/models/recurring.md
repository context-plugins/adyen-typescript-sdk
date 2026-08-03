
# Recurring

The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).

*This model accepts additional fields of type unknown.*

## Structure

`Recurring`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contract` | [`Contract \| undefined`](../../doc/models/contract.md) | Optional | - |
| `recurringDetailName` | `string \| undefined` | Optional | A descriptive name for this detail. |
| `recurringExpiry` | `string \| undefined` | Optional | Date after which no further authorisations shall be performed. Only for 3D Secure 2. |
| `recurringFrequency` | `string \| undefined` | Optional | Minimum number of days between authorisations. Only for 3D Secure 2. |
| `tokenService` | [`TokenService \| undefined`](../../doc/models/token-service.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Contract, Recurring, TokenService } from 'adyenlib';

const recurring: Recurring = {
  contract: Contract.EnumOneclickrecurring,
  recurringDetailName: 'recurringDetailName2',
  recurringExpiry: '2016-03-13T12:52:32.123Z',
  recurringFrequency: 'recurringFrequency0',
  tokenService: TokenService.Visatokenservice,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

