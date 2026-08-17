
# Card Holder PIN

## Structure

`CardHolderPIN`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `encrPINBlock` | `string` | Required | - |
| `pINFormat` | [`PINFormat1Enum`](../../doc/models/pin-format-1-enum.md) | Required | Possible values:<br><br>* **ISO0**<br>* **ISO1**<br>* **ISO2**<br>* **ISO3** |
| `additionalInput` | `string \| undefined` | Optional | **Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import { CardHolderPIN, PINFormat1Enum } from 'adyen';

const cardHolderPIN: CardHolderPIN = {
  encrPINBlock: 'EncrPINBlock4',
  pINFormat: PINFormat1Enum.ISO0,
  additionalInput: 'AdditionalInput4',
};
```

