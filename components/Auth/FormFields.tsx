import { FormFieldProps } from "@/types/auth";
import { FieldValues } from "react-hook-form";

export default function FormField<TFieldValues extends FieldValues>({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber = false,
  className = "",
}: FormFieldProps<TFieldValues>) {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`
          w-full rounded-xl border bg-white px-4 py-3 text-sm text-zinc-900
          placeholder:text-zinc-400
          outline-none
          transition-all duration-200
          border-zinc-200
          hover:border-zinc-300
          focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10
          ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/10" : ""}
          ${className}
        `}
        {...register(name, { valueAsNumber })}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
          <span>✕</span> {error.message}
        </p>
      )}
    </div>
  );
}
