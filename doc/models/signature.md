
# Signature

*This model accepts additional fields of type unknown.*

## Structure

`Signature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `askSignatureOnScreen` | `boolean \| undefined` | Optional | If `skipSignature` is false, indicates whether the shopper should provide a signature on the display (**true**) or on the merchant receipt (**false**). |
| `deviceName` | `string \| undefined` | Optional | Name that identifies the terminal. |
| `deviceSlogan` | `string \| undefined` | Optional | Slogan shown on the start screen of the device.<br><br>**Constraints**: *Maximum Length*: `50` |
| `skipSignature` | `boolean \| undefined` | Optional | Skip asking for a signature. This is possible because all global card schemes (American Express, Diners, Discover, JCB, MasterCard, VISA, and UnionPay) regard a signature as optional. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Signature } from 'adyen';

const signature: Signature = {
  askSignatureOnScreen: false,
  deviceName: 'deviceName8',
  deviceSlogan: 'deviceSlogan6',
  skipSignature: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

