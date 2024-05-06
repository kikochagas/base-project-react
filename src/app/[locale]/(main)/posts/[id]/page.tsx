'use client';

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import IPost from "../IPost";
import { fields } from "../properties";
import { TTabsOptions } from "Components/c-tabs-vertical";
import EventEffect from "Components/c-tabs-vertical/eventEffect";

export default function Page({ params }: any) {

  const {id} = params;
  const uri = `/posts/${id}`;
  const searchParams = useSearchParams();
  const [model, setModel] = useState<IPost>({
    id: 0,
    userId: 0,
    title: "",
    body: ""
  });

  const [tabsOptions, setTabsOptions] = useState<TTabsOptions[]>(
    [
      {
        name: "Account",
        value: "account",
        isDefault: true,
      },
      {
        name: "Addresses",
        value: "addresses",
      },
      {
        name: "Contacts",
        value: "contacts",
      },
      {
        name: "Contract",
        value: "contract",
      },
    ]
  );

  return EventEffect({
    uri: uri, 
    searchParams: searchParams, 
    fields: fields, 
    model: model, 
    setModel: setModel, 
    tabsOptions: tabsOptions, 
    setTabsOptions: setTabsOptions,
  });
}
