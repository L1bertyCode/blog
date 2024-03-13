import { memo } from "react";

interface MainPageProps {
 className?: string;
}

const MainPage = memo((props: MainPageProps) => {
 const { className } = props;
 return (
  <div>
   <div>MainPage</div>
  </div>
 );
});
export default MainPage;
