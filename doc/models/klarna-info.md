
# Klarna Info

*This model accepts additional fields of type unknown.*

## Structure

`KlarnaInfo`

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
import { KlarnaInfo, Region } from 'adyenlib';

const klarnaInfo: KlarnaInfo = {
  disputeEmail: 'disputeEmail2',
  region: Region.Ch,
  supportEmail: 'supportEmail6',
  autoCapture: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

