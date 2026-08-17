
# Notification 2

Configures sending event notifications by pressing a button on a terminal, for example used for pay-at-table.

## Structure

`Notification2`

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
import { CategoryEnum, Notification2 } from 'adyen';

const notification2: Notification2 = {
  category: CategoryEnum.SaleWakeUp,
  details: 'details0',
  enabled: false,
  showButton: false,
  title: 'title4',
};
```

