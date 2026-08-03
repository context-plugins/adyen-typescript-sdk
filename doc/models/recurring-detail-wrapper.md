
# Recurring Detail Wrapper

*This model accepts additional fields of type unknown.*

## Structure

`RecurringDetailWrapper`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recurringDetail` | [`RecurringDetail \| undefined`](../../doc/models/recurring-detail.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RecurringDetailWrapper } from 'adyenlib';

const recurringDetailWrapper: RecurringDetailWrapper = {
  recurringDetail: {
    recurringDetailReference: 'recurringDetailReference2',
    variant: 'variant6',
    additionalData: {
      'key0': 'additionalData2'
    },
    alias: 'alias4',
    aliasType: 'aliasType6',
    bank: {
      bankAccountNumber: 'bankAccountNumber8',
      bankCity: 'bankCity0',
      bankLocationId: 'bankLocationId2',
      bankName: 'bankName4',
      bic: 'bic0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    billingAddress: {
      city: 'city8',
      country: 'country6',
      houseNumberOrName: 'houseNumberOrName0',
      postalCode: 'postalCode6',
      street: 'street2',
      stateOrProvince: 'stateOrProvince0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

