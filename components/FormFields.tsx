type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export function TextField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-bayelsa-ink">
      {label}
      <input
        className="field-focus min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base text-bayelsa-ink"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
};

export function SelectField({
  label,
  name,
  options,
  required,
}: SelectFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-bayelsa-ink">
      {label}
      <select
        className="field-focus min-h-12 rounded-md border border-slate-300 bg-white px-3 text-base text-bayelsa-ink"
        name={name}
        required={required}
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export function TextAreaField({
  label,
  name,
  placeholder,
  required,
}: TextAreaFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-bayelsa-ink">
      {label}
      <textarea
        className="field-focus min-h-32 rounded-md border border-slate-300 bg-white px-3 py-3 text-base text-bayelsa-ink"
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

type ConsentFieldProps = {
  label: string;
  name: string;
};

export function ConsentField({ label, name }: ConsentFieldProps) {
  return (
    <label className="flex gap-3 rounded-md bg-bayelsa-palm/70 p-3 text-sm font-semibold leading-6 text-bayelsa-ink">
      <input
        className="mt-1 h-4 w-4 rounded border-slate-300 text-bayelsa-green focus:ring-bayelsa-green"
        name={name}
        type="checkbox"
        required
      />
      <span>{label}</span>
    </label>
  );
}
