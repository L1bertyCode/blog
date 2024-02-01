import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AddCommentForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { getAddCommentFormText } from "../../model/selectors/getAddCommentFormText/getAddCommentFormText";
import { getAddCommentFormError } from "../../model/selectors/getAddCommentFormError/getAddCommentFormError";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import {
 addCommentFormActions,
 addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import {
 DynamicModuleLoader,
 ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface AddCommentFormProps {
 className?: string;
 onSendComment: (text: string) => void;
}

const reducres: ReducersList = {
 addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
 (props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
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
  const onSendHandler = useCallback(() => {
   onSendComment(text || "");
   onCommentTextChange("");
  }, [dispatch, onSendComment, onCommentTextChange, text]);

  return (
   <DynamicModuleLoader reducers={reducres}>
    <div
     className={classNames(s.addCommentForm, {}, [
      className,
     ])}
    >
     <Input
      value={text}
      onChange={onCommentTextChange}
      placeholder={t("Type comment")}
      className={s.input}
     />
     <Button onClick={onSendHandler} variant="outlined">
      {t("Send")}
     </Button>
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default AddCommentForm;
