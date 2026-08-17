
# Cellulant

## Structure

`Cellulant`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The Cellulant issuer. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type17Enum \| undefined`](../../doc/models/type-17-enum.md) | Optional | **Cellulant**<br><br>**Default**: `Type17Enum.Cellulant` |

## Example

```ts
import { Cellulant, Type17Enum } from 'adyen';

const cellulant: Cellulant = {
  checkoutAttemptId: 'checkoutAttemptId6',
  issuer: 'issuer0',
  sdkData: 'sdkData0',
  type: Type17Enum.Cellulant,
};
```

