import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';
import ReusableForm from "../../ReUseableComponents/ReUseableForm/ReuseableForm";

export default function AddUser() {
  const { t } = useTranslation();
  const formFields = [
    { id: "name", label: t('userForm.name'), validation: { required: t('userForm.name') } },
    { id: "manageLibrary", label: t('userForm.manageLibrary'), validation: { required: t('userForm.manageLibrary') } },
    { id: "roleAssign", label: t('userForm.roleAssign'), validation: { required: t('userForm.roleAssign') } }
  ];

  const onSubmit = (data) => {
    console.log('Book Added', data);
  };

  return (
    <ReusableForm
      formFields={formFields}
      onSubmit={onSubmit}
      formTitle={t('userForm.title')}
      submitLabel={t('userForm.save')}
      cancelLabel={t('userForm.cancel')}
    />
  );
}
