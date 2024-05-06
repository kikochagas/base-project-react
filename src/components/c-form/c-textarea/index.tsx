import { Textarea } from "Components/ui/textarea";
import { Label } from "Components/ui/label";
import { ChangeEventHandler } from "react";

interface ICTextareaProps {
  id: string,
  placeholder: string,
  type: string
  readOnly?: boolean,
  value?: string | number | readonly string[] | undefined
  errorMessage?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

export default function CTextarea({
    id, 
    placeholder, 
    type, 
    readOnly = true, 
    value, 
    errorMessage,
    onChange
  }: ICTextareaProps) {
  return (
    <>
      <Label htmlFor={type}>{placeholder}</Label>
      <Textarea 
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