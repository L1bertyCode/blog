import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./PortfolioListPage.module.scss";

interface PortfolioListPageProps {
  className?: string;
}

const PortfolioListPage = memo(
  (props: PortfolioListPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.portfolioListPage, {}, [
          className,
        ])}
      >
        <div>PortfolioListPage</div>
      </div>
    );
  }
);
export default PortfolioListPage;
