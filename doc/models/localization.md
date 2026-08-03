
# Localization

*This model accepts additional fields of type unknown.*

## Structure

`Localization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `language` | `string \| undefined` | Optional | Language of the terminal. |
| `secondaryLanguage` | `string \| undefined` | Optional | Secondary language of the terminal. |
| `timezone` | `string \| undefined` | Optional | The time zone of the terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Localization } from 'adyenlib';

const localization: Localization = {
  language: 'language0',
  secondaryLanguage: 'secondaryLanguage6',
  timezone: 'timezone8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

