
# Localization 1

Settings for localization.

*This model accepts additional fields of type unknown.*

## Structure

`Localization1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string \| undefined` | Optional | Language of the terminal. |
| `secondaryLanguage` | `string \| undefined` | Optional | Secondary language of the terminal. |
| `timezone` | `string \| undefined` | Optional | The time zone of the terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Localization1 } from 'adyen';

const localization1: Localization1 = {
  language: 'language2',
  secondaryLanguage: 'secondaryLanguage4',
  timezone: 'timezone0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

