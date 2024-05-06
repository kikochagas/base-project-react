import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { ReactNode, useState } from "react";

type TTabsOptions = {
  name: string
  value: string
  isDefault?: boolean
  form?: ReactNode
}

export default function CTabsVertical({options}: {options:TTabsOptions[]}) {
  
  const [control, setControl] = useState<TTabsOptions[]>(options)
  const defaultValue = control.find((option) => option.isDefault)?.value;

  return (
    <Tabs orientation="vertical" defaultValue={defaultValue} className="flex bg-red-200">
      <TabsList className="flex flex-col items-start space-x-0 m-5">
        {control.map((option) => (
          <TabsTrigger 
            key={option.value} 
            value={option.value}
          >
            {option.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {control.map((option) => (
        <TabsContent
          key={option.value}
          value={option.value}
        >
          {option.form}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export type { TTabsOptions }