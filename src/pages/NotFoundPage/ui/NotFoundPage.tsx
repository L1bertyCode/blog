import { memo } from "react";

interface NotFoundPageProps {
 className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
 const { className } = props;
 return (
  <div>
   <div>NotFoundPage</div>
  </div>
 );
});
export default NotFoundPage;
