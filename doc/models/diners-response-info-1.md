
# Diners Response Info 1

**diners** details

## Structure

`DinersResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method. |
| `serviceLevel` | `string \| undefined` | Optional | The service level (settlement type) of this payment method. Possible values:<br><br>* **noContract**: Adyen holds the contract with JCB.<br>* **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly. |
| `transactionDescription` | [`TransactionDescriptionResponseInfo1 \| undefined`](../../doc/models/transaction-description-response-info-1.md) | Optional | Information regarding the transaction description. |

## Example

```ts
import { DinersResponseInfo1, Type8Enum } from 'adyen';

const dinersResponseInfo1: DinersResponseInfo1 = {
  midNumber: 'midNumber4',
  reuseMidNumber: false,
  serviceLevel: 'serviceLevel8',
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

