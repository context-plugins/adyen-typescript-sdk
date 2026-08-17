
# Diners Info

## Structure

`DinersInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. Required for merchants operating in Japan.<br>Format: 14 numeric characters.<br><br>**Constraints**: *Maximum Length*: `14` |
| `reuseMidNumber` | `boolean` | Required | Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method.<br>The default value is **false**.<br>For merchants operating in Japan, this field is required and must be set to **true**.<br><br>**Default**: `false` |
| `serviceLevel` | [`ServiceLevel1Enum \| undefined`](../../doc/models/service-level-1-enum.md) | Optional | Specifies the service level (settlement type) of this payment method. Required for merchants operating in Japan. Possible values:<br><br>* **noContract**: Adyen holds the contract with JCB.<br>* **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { DinersInfo, ServiceLevel1Enum, Type8Enum } from 'adyen';

const dinersInfo: DinersInfo = {
  reuseMidNumber: false,
  midNumber: 'midNumber6',
  serviceLevel: ServiceLevel1Enum.NoContract,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

