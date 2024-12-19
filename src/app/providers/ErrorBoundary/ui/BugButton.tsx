import { useTranslation } from "react-i18next";

import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useEffect, useState } from "react";
export const BugButton = () => {
  const [err, setErr] = useState(false);
  const { t } = useTranslation();

  const tHrowErrorToggle = () => setErr(true);
  useEffect(() => {
    if (err) {
      throw new Error();
    }
  }, [err]);
  return (
    <AppButton colorType="backgroundInverted" onClick={tHrowErrorToggle}>
      {t("Throw error")}
    </AppButton>
  );
};