
# Bank Account Identification Validation Request

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountIdentificationValidationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccountIdentificationValidationRequestAccountIdentification`](../../doc/models/containers/bank-account-identification-validation-request-account-identification.md) | Required | This is a container for one-of cases. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BankAccountIdentificationValidationRequest,
  Type413,
} from 'adyenlib';

const bankAccountIdentificationValidationRequest: BankAccountIdentificationValidationRequest = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: Type413.AuLocal,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

