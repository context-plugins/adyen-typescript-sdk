
# Admin Request 2

Content of the Admin Request message.

*This model accepts additional fields of type unknown.*

## Structure

`AdminRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceIdentification` | `string \| undefined` | Optional | Identification of the administrative service to process.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdminRequest2 } from 'adyenlib';

const adminRequest2: AdminRequest2 = {
  serviceIdentification: 'ServiceIdentification0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

