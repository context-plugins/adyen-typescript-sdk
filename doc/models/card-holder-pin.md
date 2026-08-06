
# Card Holder Pin

*This model accepts additional fields of type unknown.*

## Structure

`CardHolderPin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encrPinBlock` | `string` | Required | - |
| `pinFormat` | [`PinFormat1`](../../doc/models/pin-format-1.md) | Required | - |
| `additionalInput` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardHolderPin, PinFormat1 } from 'adyen';

const cardHolderPin: CardHolderPin = {
  encrPinBlock: 'EncrPINBlock6',
  pinFormat: PinFormat1.Iso2,
  additionalInput: 'AdditionalInput6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

