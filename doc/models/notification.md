
# Notification

## Structure

`Notification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`CategoryEnum \| undefined`](../../doc/models/category-enum.md) | Optional | The type of event notification sent when you select the notification button. |
| `details` | `string \| undefined` | Optional | The text shown in the prompt which opens when you select the notification button. For example, the description of the input box for pay-at-table. |
| `enabled` | `boolean \| undefined` | Optional | Enables sending event notifications either by pressing the Confirm key on terminals with a keypad or by tapping the event notification button on the terminal screen. |
| `showButton` | `boolean \| undefined` | Optional | Shows or hides the event notification button on the screen of terminal models that have a keypad. |
| `title` | `string \| undefined` | Optional | The name of the notification button on the terminal screen. |

## Example

```ts
import { CategoryEnum, Notification } from 'adyen';

const notification: Notification = {
  category: CategoryEnum.SaleWakeUp,
  details: 'details2',
  enabled: false,
  showButton: false,
  title: 'title2',
};
```

