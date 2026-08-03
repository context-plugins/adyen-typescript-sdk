
# Klarna Info 1

Details to provide if `type` is **klarna** or its variant.

You can use the following payment method `type` values for Klarna:

* **klarna**: Klarna Pay Later
* **klarna_account**: Klarna Pay over time
* **klarna_paynow**: Klarna Pay now
* **klarna_b2b**: [Billie via Klarna](https://docs.adyen.com/payment-methods/klarna/billie)

*This model accepts additional fields of type unknown.*

## Structure

`KlarnaInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value: **false**. |
| `disputeEmail` | `string` | Required | The email address for disputes. |
| `region` | [`Region`](../../doc/models/region.md) | Required | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `supportEmail` | `string` | Required | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KlarnaInfo1, Region } from 'adyenlib';

const klarnaInfo1: KlarnaInfo1 = {
  disputeEmail: 'disputeEmail0',
  region: Region.Ch,
  supportEmail: 'supportEmail4',
  autoCapture: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

