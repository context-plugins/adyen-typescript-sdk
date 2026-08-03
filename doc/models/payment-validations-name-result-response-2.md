
# Payment Validations Name Result Response 2

Contains the scheme-agnostic match values returned by Adyen.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidationsNameResultResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | Informs you if the first name your shopper provided matches the cardholder first name on file at the issuing bank. The first name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `fullName` | `string \| undefined` | Optional | Informs you if the full name your shopper provided matches the cardholder name on file at the issuing bank. The full name is the only field that is validated for Mastercard. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `lastName` | `string \| undefined` | Optional | Informs you if the last name your shopper provided matches the cardholder last name on file at the issuing bank. The last name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `middleName` | `string \| undefined` | Optional | Informs you if the middle name your shopper provided matches the cardholder middle name on file at the issuing bank. The middle name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentValidationsNameResultResponse2 } from 'adyenlib';

const paymentValidationsNameResultResponse2: PaymentValidationsNameResultResponse2 = {
  firstName: 'firstName0',
  fullName: 'fullName6',
  lastName: 'lastName8',
  middleName: 'middleName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

