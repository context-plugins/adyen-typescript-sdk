
# Vias Name

*This model accepts additional fields of type unknown.*

## Structure

`ViasName`

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
import { Gender, ViasName } from 'adyenlib';

const viasName: ViasName = {
  firstName: 'firstName2',
  gender: Gender.Unknown,
  infix: 'infix6',
  lastName: 'lastName6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

