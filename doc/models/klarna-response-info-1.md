
# Klarna Response Info 1

**klarna** or its variant details

## Structure

`KlarnaResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). |
| `disputeEmail` | `string \| undefined` | Optional | The email address for disputes. |
| `region` | [`Region1Enum \| undefined`](../../doc/models/region-1-enum.md) | Optional | The region of operation. |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |

## Example

```ts
import { KlarnaResponseInfo1, Region1Enum } from 'adyen';

const klarnaResponseInfo1: KlarnaResponseInfo1 = {
  autoCapture: false,
  disputeEmail: 'disputeEmail0',
  region: Region1Enum.EU,
  supportEmail: 'supportEmail4',
};
```

