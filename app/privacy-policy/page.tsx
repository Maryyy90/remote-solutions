import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Remote Solutions",
  description: "Learn how Remote Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}