
# JCB Info

## Structure

`JCBInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. Required for merchants operating in Japan or merchants operating in Canada, Australia and New Zealand when requesting `gatewayContract` or `paymentDesignatorContract` service levels.Format: 14 numeric characters for Japan, 10 numeric characters for Canada, Australia and New Zealand.<br><br>**Constraints**: *Maximum Length*: `14` |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method.<br>The default value is **false**.For merchants operating in Japan, this field is required and must be set to **true**.<br><br>**Default**: `false` |
| `serviceLevel` | [`ServiceLevel2Enum \| undefined`](../../doc/models/service-level-2-enum.md) | Optional | Specifies the service level (settlement type) of this payment method. Required for merchants operating in Japan.<br>Possible values:<br><br>* **noContract**: Adyen holds the contract with JCB for merchants operating in Japan or American Express for merchants operating in Canada, Australia and New Zealand.<br>* **gatewayContract**: JCB or American Express receives the settlement and handles disputes, then pays out to you or your sub-merchant directly.<br>* **paymentDesignatorContract**: Available only for merchants operating in Canada, Australia and New Zealand. Adyen receives the settlement, and handles disputes and payouts. |
| `transactionDescription` | [`TransactionDescriptionInfo1 \| undefined`](../../doc/models/transaction-description-info-1.md) | Optional | Information regarding the transaction description.<br><br>> You cannot configure the transaction description in the test environment. |

## Example

```ts
import { JCBInfo, ServiceLevel2Enum, Type8Enum } from 'adyen';

const jCBInfo: JCBInfo = {
  midNumber: 'midNumber8',
  reuseMidNumber: false,
  serviceLevel: ServiceLevel2Enum.GatewayContract,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type8Enum.Fixed,
  },
};
```

