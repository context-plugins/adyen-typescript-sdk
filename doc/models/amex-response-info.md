
# Amex Response Info

## Structure

`AmexResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | Merchant ID (MID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the Amex Merchant ID is reused from a previously setup Amex payment method. |
| `serviceLevel` | `string \| undefined` | Optional | The service level (settlement type) of this payment method. Possible values:<br><br>* **noContract**: Adyen holds the contract with American Express.<br>* **gatewayContract**: American Express receives the settlement and handles disputes, then pays out to you or your sub-merchant directly.<br>* **paymentDesignatorContract**: Adyen receives the settlement, and handles disputes and payouts. |

## Example

```ts
import { AmexResponseInfo } from 'adyen';

const amexResponseInfo: AmexResponseInfo = {
  midNumber: 'midNumber4',
  reuseMidNumber: false,
  serviceLevel: 'serviceLevel8',
};
```

