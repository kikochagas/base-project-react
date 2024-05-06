import { Input } from "Components/ui/input";
import { Label } from "Components/ui/label";
import { ChangeEventHandler } from "react";

interface ICInputProps {
  id: string,
  placeholder: string,
  type: string
  readOnly?: boolean,
  value?: string | number | readonly string[] | undefined
  errorMessage?: string
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CInput({
    id, 
    placeholder, 
    type, 
    readOnly = true, 
    value, 
    errorMessage,
    onChange
  }: ICInputProps) {
  return (
    <>
      <Label htmlFor={type}>{placeholder}</Label>
      <Input 
        type={type}
        id={id} 
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={onChange}
      />
      <div className="mt-2 w-[340px]">
        <span className="text-red-500">{errorMessage}</span>
      </div>
    </>
  )
}