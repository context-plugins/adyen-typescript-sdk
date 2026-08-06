
# Jcb Info

*This model accepts additional fields of type unknown.*

## Structure

`JcbInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | MID (Merchant ID) number. Required for merchants operating in Japan or merchants operating in Canada, Australia and New Zealand when requesting `gatewayContract` or `paymentDesignatorContract` service levels.Format: 14 numeric characters for Japan, 10 numeric characters for Canada, Australia and New Zealand.<br><br>**Constraints**: *Maximum Length*: `14` |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the JCB Merchant ID is reused from a previously setup JCB payment method.<br>The default value is **false**.For merchants operating in Japan, this field is required and must be set to **true**.<br><br>**Default**: `false` |
| `serviceLevel` | [`ServiceLevel2 \| undefined`](../../doc/models/service-level-2.md) | Optional | - |
| `transactionDescription` | [`TransactionDescriptionInfo \| undefined`](../../doc/models/transaction-description-info.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { JcbInfo, ServiceLevel2, Type33 } from 'adyen';

const jcbInfo: JcbInfo = {
  midNumber: 'midNumber6',
  reuseMidNumber: false,
  serviceLevel: ServiceLevel2.NoContract,
  transactionDescription: {
    doingBusinessAsName: 'doingBusinessAsName0',
    type: Type33.Fixed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

