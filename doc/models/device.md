
# Device

## Structure

`Device`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the SCA device. |
| `name` | `string \| undefined` | Optional | The name of the SCA device. You can show this name to your user to help them identify the device. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument that is associated with the SCA device. |
| `type` | [`Type101Enum \| undefined`](../../doc/models/type-101-enum.md) | Optional | The type of device.<br><br>Possible values: **ios**, **android**, **browser**. |

## Example

```ts
import { Device, Type101Enum } from 'adyen';

const device: Device = {
  id: 'id6',
  name: 'name6',
  paymentInstrumentId: 'paymentInstrumentId8',
  type: Type101Enum.Ios,
};
```

