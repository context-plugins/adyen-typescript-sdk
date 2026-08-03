
# Tap to Pay 1

Settings for Tap to Pay.

*This model accepts additional fields of type unknown.*

## Structure

`TapToPay1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantDisplayName` | `string \| undefined` | Optional | The text shown on the screen during the Tap to Pay transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TapToPay1 } from 'adyenlib';

const tapToPay1: TapToPay1 = {
  merchantDisplayName: 'merchantDisplayName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

