
# Predefined Content 1

Reference of a predefined message to display or print.
Mandatory, if `OutputFormat` is MessageRef, not allowed otherwise.

*This model accepts additional fields of type unknown.*

## Structure

`PredefinedContent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceId` | `string` | Required | Identification of a predefined message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `language` | `string \| undefined` | Optional | Identification of a language.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PredefinedContent1 } from 'adyenlib';

const predefinedContent1: PredefinedContent1 = {
  referenceId: 'ReferenceID6',
  language: 'Language6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

