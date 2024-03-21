import { Page } from "@/shared/layouts/Page";
import { memo } from "react";

interface NotFoundPageProps {
 className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
 const { className } = props;
 return (
  <Page>
   <div>NotFoundPage</div>
  </Page>
 );
});
export default NotFoundPage;
