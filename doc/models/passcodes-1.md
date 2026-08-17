
# Passcodes 1

Settings for [passcodes](https://docs.adyen.com/point-of-sale/managing-terminals/menu-access?tab=manage_passcodes_with_an_api_call_2#manage-passcodes) features.

## Structure

`Passcodes1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adminMenuPin` | `string \| undefined` | Optional | The passcode for the Admin menu and the Settings menu.<br><br>**Constraints**: *Maximum Length*: `6` |
| `refundPin` | `string \| undefined` | Optional | The passcode for referenced and unreferenced refunds on standalone terminals.<br><br>**Constraints**: *Maximum Length*: `6` |
| `screenLockPin` | `string \| undefined` | Optional | The passcode to unlock the terminal screen after a timeout.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `6` |
| `txMenuPin` | `string \| undefined` | Optional | The passcode for the Transactions menu.<br><br>**Constraints**: *Maximum Length*: `6` |

## Example

```ts
import { Passcodes1 } from 'adyen';

const passcodes1: Passcodes1 = {
  adminMenuPin: 'adminMenuPin2',
  refundPin: 'refundPin6',
  screenLockPin: 'screenLockPin6',
  txMenuPin: 'txMenuPin6',
};
```

