
import { useImperativeHandle, useRef, forwardRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

const CatchaWidget = forwardRef(({ onSuccess, ...props }, ref) => {
  const widgetRef = useRef();

  useImperativeHandle(ref, () => ({
    resetWidget: () => {
      if (widgetRef.current) widgetRef.current.reset();
    },
  }));

  return (
    <Turnstile
      {...props}
      ref={widgetRef}
      onSuccess={onSuccess}
      onExpire={() => widgetRef.current?.reset()}
      options={{
        refreshExpired: "manual",
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
