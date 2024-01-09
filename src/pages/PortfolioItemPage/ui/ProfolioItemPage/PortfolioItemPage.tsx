import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./PortfolioItemPage.module.scss";

interface PortfolioItemPageProps {
  className?: string;
}

const PortfolioItemPage = memo(
  (props: PortfolioItemPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.portfolioItemPage, {}, [
          className,
        ])}
      >
        <div>PortfolioItemPage</div>
      </div>
    );
  }
);
export default PortfolioItemPage;
