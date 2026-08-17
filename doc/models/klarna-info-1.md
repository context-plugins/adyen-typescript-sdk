
# Klarna Info 1

Details to provide if `type` is **klarna** or its variant.

You can use the following payment method `type` values for Klarna:

* **klarna**: Klarna Pay Later
* **klarna_account**: Klarna Pay over time
* **klarna_paynow**: Klarna Pay now
* **klarna_b2b**: [Billie via Klarna](https://docs.adyen.com/payment-methods/klarna/billie)

## Structure

`KlarnaInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value: **false**. |
| `disputeEmail` | `string` | Required | The email address for disputes. |
| `region` | [`RegionEnum`](../../doc/models/region-enum.md) | Required | The region of operation. For example, **NA**, **EU**, **CH**, **AU**.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `supportEmail` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { KlarnaInfo1, RegionEnum } from 'adyen';

const klarnaInfo1: KlarnaInfo1 = {
  disputeEmail: 'disputeEmail0',
  region: RegionEnum.CH,
  supportEmail: 'supportEmail4',
  autoCapture: false,
};
```

