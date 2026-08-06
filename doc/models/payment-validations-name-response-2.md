
# Payment Validations Name Response 2

Object that contains the status and outcomes of the [name validation](https://docs.adyen.com/payment-methods/cards/name-validation).

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidationsNameResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rawResponse` | [`PaymentValidationsNameResultRawResponse \| undefined`](../../doc/models/payment-validations-name-result-raw-response.md) | Optional | - |
| `result` | [`PaymentValidationsNameResultResponse \| undefined`](../../doc/models/payment-validations-name-result-response.md) | Optional | - |
| `status` | [`Status11 \| undefined`](../../doc/models/status-11.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentValidationsNameResponse2, Status11 } from 'adyen';

const paymentValidationsNameResponse2: PaymentValidationsNameResponse2 = {
  rawResponse: {
    firstName: 'firstName0',
    fullName: 'fullName4',
    lastName: 'lastName8',
    middleName: 'middleName2',
    status: 'status6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  result: {
    firstName: 'firstName8',
    fullName: 'fullName6',
    lastName: 'lastName0',
    middleName: 'middleName4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  status: Status11.NotPerformed,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

