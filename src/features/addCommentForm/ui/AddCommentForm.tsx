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

interface AddCommentFormProps {
 className?: string;
}
const reducers: ReducersList = {
 addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo(
 (props: AddCommentFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();
  const onCommentChancge = useCallback(
   (value: string) => {
    dispatch(addCommentFormActions.setText(value));
   },
   [dispatch]
  );
  return (
   <DynamicModuleLoader
    reducers={reducers}
    
   >
    <div
     className={classNames(s.addCommentForm, {}, [
      className,
     ])}
    >
     <Input
      placeholder={t("Enter comment text")}
      value={text}
      onChange={onCommentChancge}
     />
     <Button variant="outline">{t("Send")}</Button>
    </div>
   </DynamicModuleLoader>
  );
 }
);
