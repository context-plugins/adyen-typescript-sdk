
# Avs Address

## Structure

`AvsAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `streetAddress` | `string` | Required | The street and house number of the address.<br><br>Example: 1 Infinite Loop, Cupertino. |
| `zip` | `string \| undefined` | Optional | The zip or post code of the address.<br><br>Example: CA 95014 |

## Example

```ts
import { AvsAddress } from 'adyen';

const avsAddress: AvsAddress = {
  streetAddress: 'streetAddress6',
  zip: 'zip0',
};
```

