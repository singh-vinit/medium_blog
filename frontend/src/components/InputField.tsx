type Props = {
  label: string;
  field: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({ label, field, setValue }: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-4 mb-4">
      <div className="text-lg font-semibold capitalize">{label}</div>
      <input
        className="border border-slate-400 rounded-sm"
        type={field}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputField;
