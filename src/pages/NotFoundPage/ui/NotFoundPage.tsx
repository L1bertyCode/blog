import s from "./NotFoundPage.module.scss";
interface NotFoundPageProps { };
const NotFoundPage = ({ }: NotFoundPageProps) => {
  return (
    <div className={s.notFoundPage}>
      {/* eslint-disable-next-line */}
      <div>NotFoundPage</div>
    </div>
  );
};

export default NotFoundPage;