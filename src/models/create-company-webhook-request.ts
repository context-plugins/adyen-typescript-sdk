import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSettings1Schema, type AdditionalSettings1 } from "./additional-settings1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import {
  filterMerchantAccountTypeSchema,
  type FilterMerchantAccountType,
} from "./filter-merchant-account-type.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

export type CreateCompanyWebhookRequest = {
  acceptsExpiredCertificate?: boolean;
  acceptsSelfSignedCertificate?: boolean;
  acceptsUntrustedRootCertificate?: boolean;
  active: boolean;
  additionalSettings?: AdditionalSettings1;
  communicationFormat: CommunicationFormat;
  description?: string;
  encryptionProtocol?: EncryptionProtocol;
  filterMerchantAccountType: FilterMerchantAccountType;
  filterMerchantAccounts: string[];
  networkType?: NetworkType;
  password?: string;
  populateSoapActionHeader?: boolean;
  type: string;
  url: string;
  username?: string;
};

export const createCompanyWebhookRequestSchema: Schema<CreateCompanyWebhookRequest> =
  s.object<CreateCompanyWebhookRequest>({
    acceptsExpiredCertificate: s.optional(s.boolean()),
    acceptsSelfSignedCertificate: s.optional(s.boolean()),
    acceptsUntrustedRootCertificate: s.optional(s.boolean()),
    active: s.boolean(),
    additionalSettings: s.optional(s.lazy(() => additionalSettings1Schema)),
    communicationFormat: communicationFormatSchema,
    description: s.optional(s.string()),
    encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
    filterMerchantAccountType: filterMerchantAccountTypeSchema,
    filterMerchantAccounts: s.array(s.string()),
    networkType: s.optional(s.lazy(() => networkTypeSchema)),
    password: s.optional(s.string()),
    populateSoapActionHeader: s.optional(s.boolean()),
    type: s.string(),
    url: s.string(),
    username: s.optional(s.string()),
  });
