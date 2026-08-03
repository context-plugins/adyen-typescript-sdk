
# Cellulant

*This model accepts additional fields of type unknown.*

## Structure

`Cellulant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The Cellulant issuer. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type17 \| undefined`](../../doc/models/type-17.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Cellulant, Type17 } from 'adyenlib';

const cellulant: Cellulant = {
  checkoutAttemptId: 'checkoutAttemptId6',
  issuer: 'issuer0',
  sdkData: 'sdkData0',
  type: Type17.Cellulant,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

