
# Recurring Details Request

*This model accepts additional fields of type unknown.*

## Structure

`RecurringDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier you want to process the (transaction) request with. |
| `recurring` | [`Recurring3 \| undefined`](../../doc/models/recurring-3.md) | Optional | - |
| `shopperReference` | `string` | Required | The reference you use to uniquely identify the shopper (e.g. user ID or account ID). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Contract, RecurringDetailsRequest, TokenService } from 'adyen';

const recurringDetailsRequest: RecurringDetailsRequest = {
  merchantAccount: 'merchantAccount6',
  shopperReference: 'shopperReference2',
  recurring: {
    contract: Contract.EnumOneclickrecurring,
    recurringDetailName: 'recurringDetailName2',
    recurringExpiry: '2016-03-13T12:52:32.123Z',
    recurringFrequency: 'recurringFrequency0',
    tokenService: TokenService.Visatokenservice,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

