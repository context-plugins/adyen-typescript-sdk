
# Vias Name 2

The name of the individual.

> Make sure your account holder registers using the name shown on their Photo ID.
> Maximum length: 80 characters
> Cannot contain numbers. /n Cannot be empty.

*This model accepts additional fields of type unknown.*

## Structure

`ViasName2`

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
import { Gender, ViasName2 } from 'adyenlib';

const viasName2: ViasName2 = {
  firstName: 'firstName6',
  gender: Gender.Unknown,
  infix: 'infix2',
  lastName: 'lastName2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

