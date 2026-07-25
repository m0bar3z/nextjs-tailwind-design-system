"use client";

import Alert from "@/components/atoms/Alert/Alert";
import ShowcaseCard from "@/components/molecules/ShowcaseCard/ShowcaseCard";
import { useCallback, useMemo, useState } from "react";

type AlertVariant = "success" | "info" | "warning" | "error";
type AlertVisibility = Record<AlertVariant, boolean>;

const INITIAL_VISIBILITY: AlertVisibility = {
  success: true,
  info: true,
  warning: true,
  error: true,
};

const AlertShowcase = () => {
  const [visible, setVisible] = useState(INITIAL_VISIBILITY);
  const dismiss = useCallback((variant: AlertVariant) => {
    setVisible(current => ({ ...current, [variant]: false }));
  }, []);
  const closeHandlers = useMemo<Record<AlertVariant, () => void>>(
    () => ({
      success: () => dismiss("success"),
      info: () => dismiss("info"),
      warning: () => dismiss("warning"),
      error: () => dismiss("error"),
    }),
    [dismiss]
  );

  return (
    <ShowcaseCard title="Alerts" description="Alert variants with dismissible close buttons.">
      <div className="w-full space-y-3">
        {visible.success && (
          <Alert
            title="Success alert"
            subtitle="This is a success alert with a close button."
            variant="success"
            onClose={closeHandlers.success}
          />
        )}
        {visible.info && (
          <Alert
            title="Info alert"
            subtitle="This is an info alert with a close button."
            variant="info"
            onClose={closeHandlers.info}
          />
        )}
        {visible.warning && (
          <Alert
            title="Warning alert"
            subtitle="This is a warning alert with a close button."
            variant="warning"
            onClose={closeHandlers.warning}
          />
        )}
        {visible.error && (
          <Alert
            title="Error alert"
            subtitle="This is an error alert with a close button."
            variant="error"
            onClose={closeHandlers.error}
          />
        )}
      </div>
    </ShowcaseCard>
  );
};

export default AlertShowcase;
