import { memo } from "react";

interface ArticlesListPageProps {
 className?: string;
}

const ArticlesListPage = memo(
 (props: ArticlesListPageProps) => {
  const { className } = props;
  return (
   <div>
    <div>ArticlesListPage</div>
   </div>
  );
 }
);
export default ArticlesListPage;
