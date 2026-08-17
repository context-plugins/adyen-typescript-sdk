
# Vias Name 1

The name of the person.

## Structure

`ViasName1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `gender` | [`GenderEnum \| undefined`](../../doc/models/gender-enum.md) | Optional | The gender.<br><br>> The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.<br><br>**Constraints**: *Maximum Length*: `1` |
| `infix` | `string \| undefined` | Optional | The name's infix, if applicable.<br><br>> A maximum length of twenty (20) characters is imposed.<br><br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string \| undefined` | Optional | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { GenderEnum, ViasName1 } from 'adyen';

const viasName1: ViasName1 = {
  firstName: 'firstName8',
  gender: GenderEnum.UNKNOWN,
  infix: 'infix0',
  lastName: 'lastName0',
};
```

