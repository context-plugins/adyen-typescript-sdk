
# Payment Validations Name Result Raw Response 2

Contains the raw response(s) returned by the scheme for the name validation.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidationsNameResultRawResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The raw first name validation result that Adyen received from the scheme. First name validation result is only returned for Visa. |
| `fullName` | `string \| undefined` | Optional | The raw full name validation result that Adyen received from the scheme. Full name is the only field that is validated for Mastercard |
| `lastName` | `string \| undefined` | Optional | The raw last name validation result that Adyen received from the scheme. Last name validation result is only returned for Visa. |
| `middleName` | `string \| undefined` | Optional | The raw middle name validation result that Adyen received from the scheme. Middle name validation result is only returned for Visa. |
| `status` | `string \| undefined` | Optional | The raw name validation status value that Adyen received from the scheme. Only returned for Visa. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentValidationsNameResultRawResponse2 } from 'adyen';

const paymentValidationsNameResultRawResponse2: PaymentValidationsNameResultRawResponse2 = {
  firstName: 'firstName8',
  fullName: 'fullName6',
  lastName: 'lastName0',
  middleName: 'middleName4',
  status: 'status8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

