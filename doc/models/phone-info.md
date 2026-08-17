
# Phone Info

## Structure

`PhoneInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hashedNumber` | `string \| undefined` | Optional | The hashed value of the phone number used to provision the network token. |
| `lastFourDigits` | `string \| undefined` | Optional | The last four digits of the phone number used to provision the network token. |
| `number` | `string \| undefined` | Optional | The full phone number of the device used to provision the network token. |

## Example

```ts
import { PhoneInfo } from 'adyen';

const phoneInfo: PhoneInfo = {
  hashedNumber: 'hashedNumber6',
  lastFourDigits: 'lastFourDigits4',
  number: 'number6',
};
```

