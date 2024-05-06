import api from "Services/axios";
import { useCallback, useEffect } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import CTabsVertical, { TTabsOptions } from "Components/c-tabs-vertical";
import CForm from "Components/c-type-form";
import { IFillColumn } from "Components/c-data-table/columns";

interface IEventEffectProps<T>{
  uri: string;
  searchParams: ReadonlyURLSearchParams;
  fields: IFillColumn[];
  model: T;
  setModel: React.Dispatch<React.SetStateAction<T>>;
  tabsOptions: TTabsOptions[];
  setTabsOptions: React.Dispatch<React.SetStateAction<TTabsOptions[]>>;
}

export default function EventEffect<T>({
    uri,
    searchParams,
    fields,
    model,
    setModel,
    tabsOptions,
    setTabsOptions,
  }: IEventEffectProps<T>){

    const search: string = searchParams.get("type") ?? "view";

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>, name: string) => {
      setModel({
        ...model,
        [name]: event.target.value
      })
    }, [model, setModel]);

    useEffect(() => {
      async function fetchModel() {
        const response = await api.get<T>(uri);
        await setModel(response.data);
        
        const newTabsOptions = tabsOptions.map((tab) => {
          if(tab.value === "account") {
            tab.form = CForm<T>(search, fields, model, handleChange)
          }
          return tab;
        })

        setTabsOptions(newTabsOptions);
      }

      fetchModel();
    }, [
      uri, 
      search, 
      fields, 
      model, 
      setModel,
      tabsOptions, 
      setTabsOptions,
      handleChange,
    ]);
  
    return CTabsVertical({options: tabsOptions});
}