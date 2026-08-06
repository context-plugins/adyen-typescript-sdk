
# Policy 2

An object that contains a description of the allowed resources and roles for the requested session.

*This model accepts additional fields of type unknown.*

## Structure

`Policy2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resources` | [`Resource[] \| undefined`](../../doc/models/resource.md) | Optional | An object containing the type and the unique identifier of the user of the component.<br><br>For [Onboarding components](https://docs.adyen.com/platforms/onboard-users/components), this is the ID of the legal entity that has a contractual relationship with your platform. For sole proprietorships, use the ID of the legal entity of the individual owner.<br><br>For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the ID of the account holder that is associated with the balance account shown in the component.<br><br>**Constraints**: *Unique Items Required* |
| `roles` | `string[] \| undefined` | Optional | The name of the role required to use the component.<br><br>**Constraints**: *Unique Items Required* |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Policy2 } from 'adyen';

const policy2: Policy2 = {
  resources: [
    {
      type: 'Resource',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      type: 'Resource',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      type: 'Resource',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  roles: [
    'roles8',
    'roles9',
    'roles0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

