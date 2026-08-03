
# Account Holder Capability

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolderCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability. |
| `allowedLevel` | [`AllowedLevel \| undefined`](../../doc/models/allowed-level.md) | Optional, Read-only | - |
| `allowedSettings` | [`CapabilitySettings \| undefined`](../../doc/models/capability-settings.md) | Optional | - |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder. |
| `problems` | [`CapabilityProblem[] \| undefined`](../../doc/models/capability-problem.md) | Optional, Read-only | Contains verification errors and the actions that you can take to resolve them. |
| `requested` | `boolean \| undefined` | Optional | Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field. |
| `requestedLevel` | [`RequestedLevel \| undefined`](../../doc/models/requested-level.md) | Optional | - |
| `requestedSettings` | [`CapabilitySettings \| undefined`](../../doc/models/capability-settings.md) | Optional | - |
| `transferInstruments` | [`AccountSupportingEntityCapability[] \| undefined`](../../doc/models/account-supporting-entity-capability.md) | Optional, Read-only | Contains the status of the transfer instruments associated with this capability. |
| `verificationStatus` | [`VerificationStatus1 \| undefined`](../../doc/models/verification-status-1.md) | Optional, Read-only | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountHolderCapability,
  AllowedLevel,
  Capability,
  FundingSource,
  Interval,
  Type21,
  Type3,
} from 'adyenlib';

const accountHolderCapability: AccountHolderCapability = {
  allowed: false,
  allowedLevel: AllowedLevel.High,
  allowedSettings: {
    amountPerIndustry: {
      'key0': {
        currency: 'currency8',
        value: BigInt(56),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      'key1': {
        currency: 'currency8',
        value: BigInt(56),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    },
    authorizedCardUsers: false,
    fundingSource: [
      FundingSource.Credit,
      FundingSource.Debit,
      FundingSource.Prepaid
    ],
    interval: Interval.Daily,
    maxAmount: {
      currency: 'currency4',
      value: BigInt(160),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  enabled: false,
  problems: [
    {
      entity: {
        documents: [
          'documents1',
          'documents2'
        ],
        id: 'id2',
        owner: {
          documents: [
            'documents3',
            'documents4'
          ],
          id: 'id4',
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type3.LegalEntity,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      verificationErrors: [
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      entity: {
        documents: [
          'documents1',
          'documents2'
        ],
        id: 'id2',
        owner: {
          documents: [
            'documents3',
            'documents4'
          ],
          id: 'id4',
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type3.LegalEntity,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      verificationErrors: [
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          capabilities: [
            Capability.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          subErrors: [
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.Processing,
                Capability.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type21.InvalidInput,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

