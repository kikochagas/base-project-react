import { IFillColumn } from "Components/c-data-table/columns";

// Propriedades da coluna da tabela
const fields: IFillColumn[] = [
  { 
    name: "id", 
    type: "text",
    header: "ID", 
    object: 'input', 
    isFilter: true,  
    isOrderBy: false, 
    isPrimaryKey: true 
  },
  { 
    name: "userId", 
    type: "text",
    header: "UserId", 
    object: 'input', 
    isFilter: true,  
    isOrderBy: true 
  },
  { 
    name: "title", 
    type: "text",
    header: "Title", 
    object: 'input', 
    isFilter: true,  
    isOrderBy: true 
  },
  { 
    name: "body", 
    type: "text",
    header: "Description", 
    object: 'textarea', 
    isFilter: true,  
    isOrderBy: false 
  },
];


  export { fields }