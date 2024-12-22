import { Page } from "@/widgets/Page";
import s from "./MainPage.module.scss";
import { BugButton } from "@/app/providers/ErrorBoundary";
interface MainPageProps { };
const MainPage = ({ }: MainPageProps) => {
  return (
    <Page className={s.mainPage}>
      {/* eslint-disable-next-line */}
      <div>MainPage</div>
      <BugButton />
    </Page>
  );
};
export default MainPage;