
# Checkout Bank Transfer Action

## Structure

`CheckoutBankTransferAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string \| undefined` | Optional | The account number of the bank transfer. |
| `bankCode` | `string \| undefined` | Optional | The bank code of the bank transfer. |
| `beneficiary` | `string \| undefined` | Optional | The name of the account holder. |
| `bic` | `string \| undefined` | Optional | The BIC of the IBAN. |
| `branchCode` | `string \| undefined` | Optional | The branch code of the bank transfer. |
| `downloadUrl` | `string \| undefined` | Optional | The url to download payment details with. |
| `iban` | `string \| undefined` | Optional | The IBAN of the bank transfer. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `reference` | `string \| undefined` | Optional | The transfer reference. |
| `routingNumber` | `string \| undefined` | Optional | The routing number of the bank transfer. |
| `shopperEmail` | `string \| undefined` | Optional | The e-mail of the shopper, included if an e-mail was sent to the shopper. |
| `sortCode` | `string \| undefined` | Optional | The sort code of the bank transfer. |
| `totalAmount` | [`Amount10 \| undefined`](../../doc/models/amount-10.md) | Optional | The amount of the bank transfer. |
| `type` | `string` | Required, Constant | The type of the action.<br><br>**Value**: `'bankTransfer'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutBankTransferAction } from 'adyen';

const checkoutBankTransferAction: CheckoutBankTransferAction = {
  type: 'bankTransfer',
  accountNumber: 'accountNumber6',
  bankCode: 'bankCode6',
  beneficiary: 'beneficiary4',
  bic: 'bic8',
  branchCode: 'branchCode2',
};
```

