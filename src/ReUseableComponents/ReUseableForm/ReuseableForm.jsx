import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "./Button";

export default function ReusableForm({ formFields, onSubmit, formTitle, submitLabel, cancelLabel }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 bg-white p-8 sm:p-12 md:p-16 lg:p-20 rounded-xl mx-4 sm:mx-8 lg:mx-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">{formTitle}</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-x-2 gap-y-6">
        {formFields.map(({ id, label, validation }) => (
          <FormInput
            key={id}
            id={id}
            label={label}
            register={register}
            validation={validation}
            error={errors[id]}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-x-4 sm:gap-x-6">
        <Button type="button" label={cancelLabel} additionalClasses="text-gray-900" />
        <Button type="submit" label={submitLabel} additionalClasses="bg-indigo-600 text-white hover:bg-indigo-500" />
      </div>
    </form>
  );
}
