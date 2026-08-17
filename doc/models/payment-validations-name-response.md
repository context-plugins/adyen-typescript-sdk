
# Payment Validations Name Response

## Structure

`PaymentValidationsNameResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `rawResponse` | [`PaymentValidationsNameResultRawResponse2 \| undefined`](../../doc/models/payment-validations-name-result-raw-response-2.md) | Optional | Contains the raw response(s) returned by the scheme for the name validation. |
| `result` | [`PaymentValidationsNameResultResponse2 \| undefined`](../../doc/models/payment-validations-name-result-response-2.md) | Optional | Contains the scheme-agnostic match values returned by Adyen. |
| `status` | [`StatusEnum \| undefined`](../../doc/models/status-enum.md) | Optional | Informs you if the name validation was performed. Possible values:<br><br>**performed**, **notPerformed**, **notSupported** |

## Example

```ts
import { PaymentValidationsNameResponse, StatusEnum } from 'adyen';

const paymentValidationsNameResponse: PaymentValidationsNameResponse = {
  rawResponse: {
    firstName: 'firstName0',
    fullName: 'fullName4',
    lastName: 'lastName8',
    middleName: 'middleName2',
    status: 'status6',
  },
  result: {
    firstName: 'firstName8',
    fullName: 'fullName6',
    lastName: 'lastName0',
    middleName: 'middleName4',
  },
  status: StatusEnum.NotSupported,
};
```

