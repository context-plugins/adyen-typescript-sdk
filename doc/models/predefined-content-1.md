
# Predefined Content 1

Reference of a predefined message to display or print.
Mandatory, if `OutputFormat` is MessageRef, not allowed otherwise.

## Structure

`PredefinedContent1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `referenceID` | `string` | Required | Identification of a predefined message to display or print.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `language` | `string \| undefined` | Optional | Identification of a language.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |

## Example

```ts
import { PredefinedContent1 } from 'adyen';

const predefinedContent1: PredefinedContent1 = {
  referenceID: 'ReferenceID6',
  language: 'Language6',
};
```

