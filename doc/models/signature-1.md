
# Signature 1

Settings to skip signature, sign on display, or sign on receipt.

## Structure

`Signature1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `askSignatureOnScreen` | `boolean \| undefined` | Optional | If `skipSignature` is false, indicates whether the shopper should provide a signature on the display (**true**) or on the merchant receipt (**false**). |
| `deviceName` | `string \| undefined` | Optional | Name that identifies the terminal. |
| `deviceSlogan` | `string \| undefined` | Optional | Slogan shown on the start screen of the device.<br><br>**Constraints**: *Maximum Length*: `50` |
| `skipSignature` | `boolean \| undefined` | Optional | Skip asking for a signature. This is possible because all global card schemes (American Express, Diners, Discover, JCB, MasterCard, VISA, and UnionPay) regard a signature as optional. |

## Example

```ts
import { Signature1 } from 'adyen';

const signature1: Signature1 = {
  askSignatureOnScreen: false,
  deviceName: 'deviceName6',
  deviceSlogan: 'deviceSlogan4',
  skipSignature: false,
};
```

