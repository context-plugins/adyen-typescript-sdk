
# Name 6

*This model accepts additional fields of type unknown.*

## Structure

`Name6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | Set to **requested** to request a [name validation](https://docs.adyen.com/payment-methods/cards/name-validation) to verify if the cardholder name provided by the shopper matches the cardholder name on file at the issuing bank. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Name6 } from 'adyen';

const name6: Name6 = {
  status: 'status2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

