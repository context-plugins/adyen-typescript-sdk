
# Admin Request 3

*This model accepts additional fields of type unknown.*

## Structure

`AdminRequest3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceIdentification` | `string \| undefined` | Optional | Identification of the administrative service to process.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdminRequest3 } from 'adyen';

const adminRequest3: AdminRequest3 = {
  serviceIdentification: 'ServiceIdentification0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

