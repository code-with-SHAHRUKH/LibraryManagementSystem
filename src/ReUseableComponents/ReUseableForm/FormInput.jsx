const FormInput = ({ id, label, register, validation, error }) => (
    <div className="w-full md:col-span-2 sm:col-span-6">
      <label htmlFor={id} className="font-semibold text-left text-sm sm:text-base text-gray-700">
        {label}
      </label>
      <input
        type="text"
        {...register(id, validation)}
        id={id}
        className="pl-3 mt-2 block w-full rounded-md border-0 py-1.5 sm:py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {error && <p className='text-red-500 text-left text-sm sm:text-base mt-1'>{error.message}</p>}
    </div>
  );
export default FormInput;
  