'use client';

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react"

export default function LocalSwitcher() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}/`);
        })
    }

    return (
        <label className="border-2 rounded">
            <p className="sr-only">change language</p>
            <select 
                className="bg-transparent py-2" 
                defaultValue={localActive}
                onChange={onSelectChange}
                disabled={isPending}
            >
                <option value="en">English</option>
                <option value="pt">Portugues</option>                
            </select>
        </label>
    )
}