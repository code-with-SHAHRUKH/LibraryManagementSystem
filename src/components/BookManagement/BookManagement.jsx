import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';
import ReusableForm from "../../ReUseableComponents/ReUseableForm/ReuseableForm";

export default function BookManagement() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();
  const formFields = [
    { id: "Booktitle", label: t('bookForm.title'), validation: { required: t('bookForm.title') } },
    { id: "author", label: t('bookForm.author'), validation: { required: t('bookForm.author') } },
    { id: "language", label: t('bookForm.language'), validation: { required: t('bookForm.language') } },
    { id: "subject", label: t('bookForm.subject'), validation: { required: t('bookForm.subject') } },
    { id: "publisher", label: t('bookForm.publisher'), validation: { required: t('bookForm.publisher') } },
    { id: "translator", label: t('bookForm.translator'), validation: { required: t('bookForm.translator') } },
    { id: "publicationLocation", label: t('bookForm.publicationLocation'), validation: { required: t('bookForm.publicationLocation') } },
    { id: "qrCodeNumber", label: t('bookForm.qrCodeNumber'), validation: { required: t('bookForm.qrCodeNumber') } },
    { id: "isbn", label: t('bookForm.isbn'), validation: { required: t('bookForm.isbn') } },
    { id: "sect", label: t('bookForm.sect'), validation: { required: t('bookForm.sect') } },
  ];

  const onSubmit = (data) => {
    console.log('Book Added', data);
  };

  return (
    <ReusableForm
      formFields={formFields}
      onSubmit={onSubmit}
      formTitle={t('bookForm.title')}
      submitLabel={t('bookForm.save')}
      cancelLabel={t('bookForm.cancel')}
    />
  );
}
