import { Mail, Smartphone } from "lucide-react";

export default function ContactInfo({ icon, info }) {
  return (
    <div className="flex my-3">
      {icon === "mail" ? (
        <Mail stroke="#71806B" />
      ) : icon === "phone" ? (
        <Smartphone stroke="#71806B" />
      ) : icon === "info" ? (
        <div></div>
      ) : null}
      <span>{info}</span>
    </div>
  );
}
