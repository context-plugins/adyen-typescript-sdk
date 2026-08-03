
# Payment Validations Name Result Raw Response

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidationsNameResultRawResponse`

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
import { PaymentValidationsNameResultRawResponse } from 'adyenlib';

const paymentValidationsNameResultRawResponse: PaymentValidationsNameResultRawResponse = {
  firstName: 'firstName6',
  fullName: 'fullName2',
  lastName: 'lastName2',
  middleName: 'middleName6',
  status: 'status0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

