import s from "./MainPage.module.scss";
interface MainPageProps { };
const MainPage = ({ }: MainPageProps) => {
  return (
    <div className={s.mainPage}>
      <div>MainPage</div>
    </div>
  );
};
export default MainPage;