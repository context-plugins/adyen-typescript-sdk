
# Localization 1

Settings for localization.

## Structure

`Localization1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string \| undefined` | Optional | Language of the terminal. |
| `secondaryLanguage` | `string \| undefined` | Optional | Secondary language of the terminal. |
| `timezone` | `string \| undefined` | Optional | The time zone of the terminal. |

## Example

```ts
import { Localization1 } from 'adyen';

const localization1: Localization1 = {
  language: 'language2',
  secondaryLanguage: 'secondaryLanguage4',
  timezone: 'timezone0',
};
```

