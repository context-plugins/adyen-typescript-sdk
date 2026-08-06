
# Amex Info

*This model accepts additional fields of type unknown.*

## Structure

`AmexInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `midNumber` | `string \| undefined` | Optional | Merchant ID (MID) number. Format: 10 numeric characters.<br>You must provide this field when you request `gatewayContract` or `paymentDesignatorContract` service levels.<br><br>**Constraints**: *Maximum Length*: `10` |
| `reuseMidNumber` | `boolean \| undefined` | Optional | Indicates whether the Amex Merchant ID is reused from a previously setup Amex payment method.<br>This is only applicable for `gatewayContract` and `paymentDesignatorContract` service levels.<br>The default value is **false**.<br><br>**Default**: `false` |
| `serviceLevel` | [`ServiceLevel`](../../doc/models/service-level.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmexInfo, ServiceLevel } from 'adyen';

const amexInfo: AmexInfo = {
  serviceLevel: ServiceLevel.GatewayContract,
  midNumber: 'midNumber0',
  reuseMidNumber: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

