import React from "react";
import { Turnstile } from "@marsidev/react-turnstile";

function CatchaWidget({ onSuccess }) {
  return (
    <Turnstile
      onSuccess={onSuccess}
      className="full-width bg-red-50"
      options={{
        action: "submit-form",
        theme: "light",
        size: "auto",
        language: "en",
      }}
      siteKey="0x4AAAAAAAhXtk-GQ-xraU5D"
    />
  );
}

export default CatchaWidget;
