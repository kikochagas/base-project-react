import CFormNew from "Components/c-type-form/CFormNew";
import CFormView from "Components/c-type-form/CFormView";
import CFormEdit from "Components/c-type-form/CFormEdit";
import CFormDelete from "Components/c-type-form/CFormDelete";

import TTypeForm from "Components/c-type-form/TTypeForm";

const TypeForm: TTypeForm = {
  new: CFormNew,
  view: CFormView,
  edit: CFormEdit,
  delete: CFormDelete
}

export default TypeForm