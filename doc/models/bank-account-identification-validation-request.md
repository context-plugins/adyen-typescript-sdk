
# Bank Account Identification Validation Request

## Structure

`BankAccountIdentificationValidationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccountIdentificationValidationRequestAccountIdentification`](../../doc/models/containers/bank-account-identification-validation-request-account-identification.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { BankAccountIdentificationValidationRequest } from 'adyen';

const bankAccountIdentificationValidationRequest: BankAccountIdentificationValidationRequest = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: 'auLocal',
  },
};
```

