import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AddCommentForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import {
 getAddCommentFormError,
 getAddCommentFormText,
} from "../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
 addCommentFormActions,
 addCommentFormReducer,
} from "../model/slices/addCommentFormSlice";
import {
 DynamicModuleLoader,
 ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { sendComment } from "../model/services/sendComment/sendComment";

interface AddCommentFormProps {
 className?: string;
}
const reducers: ReducersList = {
 addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
 (props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();
  const onCommentTextChange = useCallback(
   (value: string) => {
    dispatch(addCommentFormActions.setText(value));
   },
   [dispatch]
  );
  const onSendComment = () =>
   useCallback(() => {
    dispatch(sendComment());
   }, [dispatch]);
  return (
   <DynamicModuleLoader reducers={reducers}>
    <div
     className={classNames(s.addCommentForm, {}, [
      className,
     ])}
    >
     <Input
      placeholder={t("Enter comment text")}
      value={text}
      onChange={onCommentTextChange}
      className={s.input}
     />

     <Button onClick={onSendComment} variant="outline">
      {t("Send")}
     </Button>
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default AddCommentForm;
