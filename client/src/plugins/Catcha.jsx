/* eslint-disable react/prop-types */
import { useImperativeHandle, useRef, forwardRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const CatchaWidget = forwardRef(({ onSuccess }, ref) => {
  const widgetRef = useRef();

  useImperativeHandle(ref, () => ({
    resetWidget: () => {
      if (widgetRef.current) widgetRef.current.reset();
    },
  }));

  return (
    <Turnstile
      ref={widgetRef}
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
});

CatchaWidget.displayName = "CatchaWidget";

export default CatchaWidget;
