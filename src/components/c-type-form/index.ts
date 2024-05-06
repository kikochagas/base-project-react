import TypeForm from "Components/c-type-form/TypeForm";
import TTypeForm from "Components/c-type-form/TTypeForm";
import { TTabsOptions } from "../c-tabs-vertical";

const CForm = <T>(
    search: string, 
    fields: any, 
    model: T, 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void
  ) => {
  const component = TypeForm[search as keyof TTypeForm];
  return component<T>(fields, model, handleChange);
}

export default CForm;