import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AddCommentForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { Textarea } from "@/shared/ui/Textarea/Textarea";

interface AddCommentFormProps {
 className?: string;
}

const AddCommentForm = memo(
 (props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(s.addCommentForm, {}, [
     className,
    ])}
   >
  
    <Textarea
     placeholder={t("Type comment")}
     className={s.input}
    />
    <Button variant="outline">{t("Send")}</Button>
   </div>
  );
 }
);
export default AddCommentForm;
