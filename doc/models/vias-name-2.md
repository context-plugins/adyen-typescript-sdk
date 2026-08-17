
# Vias Name 2

The name of the individual.

> Make sure your account holder registers using the name shown on their Photo ID.
> Maximum length: 80 characters
> Cannot contain numbers. /n Cannot be empty.

## Structure

`ViasName2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string \| undefined` | Optional | The first name.<br><br>**Constraints**: *Maximum Length*: `80` |
| `gender` | [`GenderEnum \| undefined`](../../doc/models/gender-enum.md) | Optional | The gender.<br><br>> The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.<br><br>**Constraints**: *Maximum Length*: `1` |
| `infix` | `string \| undefined` | Optional | The name's infix, if applicable.<br><br>> A maximum length of twenty (20) characters is imposed.<br><br>**Constraints**: *Maximum Length*: `20` |
| `lastName` | `string \| undefined` | Optional | The last name.<br><br>**Constraints**: *Maximum Length*: `80` |

## Example

```ts
import { GenderEnum, ViasName2 } from 'adyen';

const viasName2: ViasName2 = {
  firstName: 'firstName6',
  gender: GenderEnum.UNKNOWN,
  infix: 'infix2',
  lastName: 'lastName2',
};
```

