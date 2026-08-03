
# Tap to Pay

*This model accepts additional fields of type unknown.*

## Structure

`TapToPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantDisplayName` | `string \| undefined` | Optional | The text shown on the screen during the Tap to Pay transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TapToPay } from 'adyenlib';

const tapToPay: TapToPay = {
  merchantDisplayName: 'merchantDisplayName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

