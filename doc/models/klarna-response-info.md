
# Klarna Response Info

## Structure

`KlarnaResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). |
| `disputeEmail` | `string \| undefined` | Optional | The email address for disputes. |
| `region` | [`Region1Enum \| undefined`](../../doc/models/region-1-enum.md) | Optional | The region of operation. |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |

## Example

```ts
import { KlarnaResponseInfo, Region1Enum } from 'adyen';

const klarnaResponseInfo: KlarnaResponseInfo = {
  autoCapture: false,
  disputeEmail: 'disputeEmail6',
  region: Region1Enum.AU,
  supportEmail: 'supportEmail0',
};
```

