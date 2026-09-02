import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalSettings1Schema, type AdditionalSettings1 } from "./additional-settings1.js";
import { communicationFormatSchema, type CommunicationFormat } from "./communication-format.js";
import { encryptionProtocolSchema, type EncryptionProtocol } from "./encryption-protocol.js";
import {
  filterMerchantAccountType2Schema,
  type FilterMerchantAccountType2,
} from "./filter-merchant-account-type2.js";
import { networkTypeSchema, type NetworkType } from "./network-type.js";

export type UpdateCompanyWebhookRequest = {
  acceptsExpiredCertificate?: boolean;
  acceptsSelfSignedCertificate?: boolean;
  acceptsUntrustedRootCertificate?: boolean;
  active?: boolean;
  additionalSettings?: AdditionalSettings1;
  communicationFormat?: CommunicationFormat;
  description?: string;
  encryptionProtocol?: EncryptionProtocol;
  filterMerchantAccountType?: FilterMerchantAccountType2;
  filterMerchantAccounts?: string[];
  networkType?: NetworkType;
  password?: string;
  populateSoapActionHeader?: boolean;
  url?: string;
  username?: string;
};

export const updateCompanyWebhookRequestSchema: Schema<UpdateCompanyWebhookRequest> =
  s.object<UpdateCompanyWebhookRequest>({
    acceptsExpiredCertificate: s.optional(s.boolean()),
    acceptsSelfSignedCertificate: s.optional(s.boolean()),
    acceptsUntrustedRootCertificate: s.optional(s.boolean()),
    active: s.optional(s.boolean()),
    additionalSettings: s.optional(s.lazy(() => additionalSettings1Schema)),
    communicationFormat: s.optional(s.lazy(() => communicationFormatSchema)),
    description: s.optional(s.string()),
    encryptionProtocol: s.optional(s.lazy(() => encryptionProtocolSchema)),
    filterMerchantAccountType: s.optional(s.lazy(() => filterMerchantAccountType2Schema)),
    filterMerchantAccounts: s.optional(s.array(s.string())),
    networkType: s.optional(s.lazy(() => networkTypeSchema)),
    password: s.optional(s.string()),
    populateSoapActionHeader: s.optional(s.boolean()),
    url: s.optional(s.string()),
    username: s.optional(s.string()),
  });
