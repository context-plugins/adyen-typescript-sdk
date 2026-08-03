
# Klarna Response Info

*This model accepts additional fields of type unknown.*

## Structure

`KlarnaResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `autoCapture` | `boolean \| undefined` | Optional | Indicates the status of [Automatic capture](https://docs.adyen.com/online-payments/capture#automatic-capture). |
| `disputeEmail` | `string \| undefined` | Optional | The email address for disputes. |
| `region` | [`Region1 \| undefined`](../../doc/models/region-1.md) | Optional | - |
| `supportEmail` | `string \| undefined` | Optional | The email address of merchant support. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { KlarnaResponseInfo, Region1 } from 'adyenlib';

const klarnaResponseInfo: KlarnaResponseInfo = {
  autoCapture: false,
  disputeEmail: 'disputeEmail6',
  region: Region1.Au,
  supportEmail: 'supportEmail0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

