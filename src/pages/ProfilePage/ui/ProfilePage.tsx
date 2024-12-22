import { Page } from "@/widgets/Page";
import s from "./ProfilePage.module.scss";
interface ProfilePageProps { };
const ProfilePage = ({ }: ProfilePageProps) => {
  return (
    <Page className={s.profilePage}>
      {/* eslint-disable-next-line */}
      <div>ProfilePage</div>
    </Page>
  );
};

export default ProfilePage;