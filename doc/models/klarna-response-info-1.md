
# Klarna Response Info 1

**klarna** or its variant details

*This model accepts additional fields of type unknown.*

## Structure

`KlarnaResponseInfo1`

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
import { KlarnaResponseInfo1, Region1 } from 'adyen';

const klarnaResponseInfo1: KlarnaResponseInfo1 = {
  autoCapture: false,
  disputeEmail: 'disputeEmail0',
  region: Region1.Eu,
  supportEmail: 'supportEmail4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

