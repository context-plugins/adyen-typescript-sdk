
# Klarna Info

## Structure

`KlarnaInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). Default value: **false**. |
| `disputeEmail` | `string` | Required | The email address for disputes. |
| `region` | [`RegionEnum`](../../doc/models/region-enum.md) | Required | The region of operation. For example, **NA**, **EU**, **CH**, **AU**.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `supportEmail` | `string` | Required | The email address of merchant support. |

## Example

```ts
import { KlarnaInfo, RegionEnum } from 'adyen';

const klarnaInfo: KlarnaInfo = {
  disputeEmail: 'disputeEmail2',
  region: RegionEnum.CH,
  supportEmail: 'supportEmail6',
  autoCapture: false,
};
```

