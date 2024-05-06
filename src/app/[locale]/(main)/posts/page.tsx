"use client"


import CDataTable from "Components/c-data-table";
import { IActionButton } from "Components/c-data-table/columns";
import { useEffect, useState } from "react";
import { useRouter as useRouterNavigation, usePathname } from "next/navigation";
import IPost from "./IPost";
import {fields } from "./properties";
import api from "@/services/axios";

async function getData<T>(uri: string): Promise<T[]> {
  const response = await api.get(uri);
  return response.data;
}
  
export default function Home() {
  const router = useRouterNavigation();
  const pathname = usePathname();
  const [initialData, setInitialData] = useState<IPost[]>([]);

  useEffect(()=> {
    async function fetchInitialData() {
        const data = await getData<IPost>("/posts");
        setInitialData(data);
    }

    fetchInitialData();
  }, []);

  const handleClickNew = (id: string) => {
    const newUrl = `${pathname}/${id}?type=new`;
    router.push(newUrl);
  };

  const handleClickView = (id: string) => {
    const newUrl = `${pathname}/${id}?type=view`;
    router.push(newUrl);
  };
  
  const handleClickEdit = (id: string) => {
    const newUrl = `${pathname}/${id}?type=edit`
    router.push(newUrl);
  };
  
  const handleClickDelete = (id: string) => {
    const newUrl = `${pathname}/${id}?type=delete`
    router.push(newUrl);
  };

  // Propriedade dos botões para cada registo na tabela
  const actionButton: IActionButton[] = [
    { name: 'View', object: 'button', type: 'view', fnt: handleClickView },
    { name: 'Update', object: 'button', type: 'update', fnt: handleClickEdit },
    { name: 'Delete', object: 'button', type: 'delete', fnt: handleClickDelete },
  ];

  return (
      <>
        <CDataTable<IPost> 
          fillColumn={fields} 
          initialData={initialData}
          actionButton={actionButton}
          hasControl={true} 
        />
      </>
  );
}