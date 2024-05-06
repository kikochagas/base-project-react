import { useRouter } from "next/navigation";
import { IFillColumn } from "Components/c-data-table/columns"
import ListComponents from "Components/c-type-form/ListComponents"
import TListComponents from "Components/c-type-form/TListComponents"

export default function CFormEdit<T>(
    fields: any,
    model: T,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void,
  ) {
    const router = useRouter();

    return (
      <>
        {
          fields.map((field: IFillColumn) => {
            const tmodel: any = model
            const Component = ListComponents[field.object as keyof TListComponents]
            return (
              <div key={field.name}>
                <Component 
                  id={field.name}
                  placeholder={field.header}
                  type="text"
                  value={tmodel[field.name]}
                  readOnly={false}
                  onChange={(event:any) => handleChange(event, field.name)}
                />
              </div>
            )
          })
        }
      </>
    )
}