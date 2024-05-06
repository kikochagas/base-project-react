import { IFillColumn } from "Components/c-data-table/columns"
import ListComponents from "@/components/c-type-form/ListComponents"
import TListComponents from "Components/c-type-form/TListComponents"

export default function CFormView<T>(
    fields: any,
    model: T,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, name: string) => void,
  ) {

    return (
      <>
        <h2>Main</h2>
        {
          fields.map((field: IFillColumn) => {
            const tmodel: any = model
            const Component = ListComponents[field.object as keyof TListComponents]
            return (
              <div key={field.name}>
                <Component 
                  id={field.name}
                  placeholder={field.header}
                  type={field.type}
                  value={tmodel[field.name]}
                  readOnly={true}
                  onChange={(event:any) => handleChange(event, field.name)}
                />
              </div>
            )
          })
        }
      </>
    )
}