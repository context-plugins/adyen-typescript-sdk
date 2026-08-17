
# Diners Response Info

## Structure

`DinersResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method. |
| `serviceLevel` | `string \| undefined` | Optional | The service level (settlement type) of this payment method. Possible values:<br><br>* **noContract**: Adyen holds the contract with JCB.<br>* **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { DinersResponseInfo, Type8Enum } from 'adyen';

const dinersResponseInfo: DinersResponseInfo = {
  midNumber: 'midNumber0',
  reuseMidNumber: false,
  serviceLevel: 'serviceLevel6',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

