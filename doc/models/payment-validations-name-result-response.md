
# Payment Validations Name Result Response

## Structure

`PaymentValidationsNameResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | Informs you if the first name your shopper provided matches the cardholder first name on file at the issuing bank. The first name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `fullName` | `string \| undefined` | Optional | Informs you if the full name your shopper provided matches the cardholder name on file at the issuing bank. The full name is the only field that is validated for Mastercard. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `lastName` | `string \| undefined` | Optional | Informs you if the last name your shopper provided matches the cardholder last name on file at the issuing bank. The last name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |
| `middleName` | `string \| undefined` | Optional | Informs you if the middle name your shopper provided matches the cardholder middle name on file at the issuing bank. The middle name is only validated for Visa. Possible values:<br><br>**match**, **partialMatch**, **noMatch** |

## Example

```ts
import { PaymentValidationsNameResultResponse } from 'adyen';

const paymentValidationsNameResultResponse: PaymentValidationsNameResultResponse = {
  firstName: 'firstName8',
  fullName: 'fullName6',
  lastName: 'lastName0',
  middleName: 'middleName4',
};
```

