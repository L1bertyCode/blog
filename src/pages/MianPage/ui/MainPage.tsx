import { Page } from "@/shared/layouts/Page";
import { memo } from "react";
import s from "./MainPage.module.scss";
interface MainPageProps {
 className?: string;
}

const MainPage = memo((props: MainPageProps) => {
 const { className } = props;
 return (
  <Page className={s.mainPage}>
   <div>MainPage</div>
  </Page>
 );
});
export default MainPage;
