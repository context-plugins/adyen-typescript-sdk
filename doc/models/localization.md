
# Localization

## Structure

`Localization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string \| undefined` | Optional | Language of the terminal. |
| `secondaryLanguage` | `string \| undefined` | Optional | Secondary language of the terminal. |
| `timezone` | `string \| undefined` | Optional | The time zone of the terminal. |

## Example

```ts
import { Localization } from 'adyen';

const localization: Localization = {
  language: 'language0',
  secondaryLanguage: 'secondaryLanguage6',
  timezone: 'timezone8',
};
```

