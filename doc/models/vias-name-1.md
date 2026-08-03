
# Vias Name 1

The name of the person.

*This model accepts additional fields of type unknown.*

## Structure

`ViasName1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `gender` | [`Gender \| undefined`](../../doc/models/gender.md) | Optional | **Constraints**: *Maximum Length*: `1` |
| `infix` | `string \| undefined` | Optional | The name's infix, if applicable.<br><br>> A maximum length of twenty (20) characters is imposed.<br><br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string \| undefined` | Optional | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Gender, ViasName1 } from 'adyenlib';

const viasName1: ViasName1 = {
  firstName: 'firstName8',
  gender: Gender.Unknown,
  infix: 'infix0',
  lastName: 'lastName0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

