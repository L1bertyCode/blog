import s from "./MainPage.module.scss";
import { BugButton } from "@/app/providers/ErrorBoundary";
interface MainPageProps { };
const MainPage = ({ }: MainPageProps) => {
  return (
    <div className={s.mainPage}>
      {/* eslint-disable-next-line */}
      <div>MainPage</div>
      <BugButton />
    </div>
  );
};
export default MainPage;