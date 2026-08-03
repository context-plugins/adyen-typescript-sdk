
# Notification

*This model accepts additional fields of type unknown.*

## Structure

`Notification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `category` | [`Category1 \| undefined`](../../doc/models/category-1.md) | Optional | - |
| `details` | `string \| undefined` | Optional | The text shown in the prompt which opens when you select the notification button. For example, the description of the input box for pay-at-table. |
| `enabled` | `boolean \| undefined` | Optional | Enables sending event notifications either by pressing the Confirm key on terminals with a keypad or by tapping the event notification button on the terminal screen. |
| `showButton` | `boolean \| undefined` | Optional | Shows or hides the event notification button on the screen of terminal models that have a keypad. |
| `title` | `string \| undefined` | Optional | The name of the notification button on the terminal screen. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Category1, Notification } from 'adyenlib';

const notification: Notification = {
  category: Category1.SaleWakeUp,
  details: 'details2',
  enabled: false,
  showButton: false,
  title: 'title2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

