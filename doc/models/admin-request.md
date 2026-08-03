
# Admin Request

Empty.
Content of the Custom Admin Request message.

*This model accepts additional fields of type unknown.*

## Structure

`AdminRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `serviceIdentification` | `string \| undefined` | Optional | Identification of the administrative service to process.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdminRequest } from 'adyenlib';

const adminRequest: AdminRequest = {
  serviceIdentification: 'ServiceIdentification4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

