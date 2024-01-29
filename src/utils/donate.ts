import { Address } from "viem";
import { AUDIT_STATUS, Donate } from "@/types/donate";

export function getAuditStatus(donate: Donate, auditorAddress: Address) {
  const auditorIndex = donate?.auditorsAddress?.findIndex(address => auditorAddress === address)
  if (!donate?.auditorReason?.[auditorIndex]) {
    return AUDIT_STATUS.NO_AUDIT
  } if (donate.auditProgress) {
    return AUDIT_STATUS.AGREE
  }
  return AUDIT_STATUS.DISAGREE
}

export function getAuditReason(donate: Donate, auditorAddress: Address) {
  const auditorIndex = donate.auditorsAddress?.findIndex(address => auditorAddress === address)
  return donate.auditorReason[auditorIndex]
}

export function getDonateDetail(donate: any): Donate {
  return {
    ...donate,
    ...JSON.parse(donate?.json || '{}'),
    images: JSON.parse(donate?.json || '{}')?.images?.split(','),
  }
}