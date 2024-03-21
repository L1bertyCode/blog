import { Page } from "@/shared/layouts/Page";
import { memo } from "react";

interface ArticlesListPageProps {
 className?: string;
}

const ArticlesListPage = memo(
 (props: ArticlesListPageProps) => {
  const { className } = props;
  return (
   <Page>
    <div>ArticlesListPage</div>
   </Page>
  );
 }
);
export default ArticlesListPage;
