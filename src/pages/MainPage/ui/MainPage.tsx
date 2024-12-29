import { Page } from "@/widgets/Page";
import s from "./MainPage.module.scss";
import { BugButton } from "@/app/providers/ErrorBoundary";
import { Counter } from "@/entities/Counter";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { useState } from "react";
interface MainPageProps { };
const MainPage = ({ }: MainPageProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <Page className={s.mainPage}>
      {/* eslint-disable-next-line */}
      <div>MainPage</div>
      <BugButton />
      <Counter />
      <AppInput
        placeholder="1234"
        value={value}
        onChange={(val: string) => setValue(val)}
        autoFocus={true}
      />
      <h1>{value}</h1>
    </Page>
  );
};
export default MainPage;