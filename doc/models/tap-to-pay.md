
# Tap to Pay

## Structure

`TapToPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantDisplayName` | `string \| undefined` | Optional | The text shown on the screen during the Tap to Pay transaction. |

## Example

```ts
import { TapToPay } from 'adyen';

const tapToPay: TapToPay = {
  merchantDisplayName: 'merchantDisplayName2',
};
```

