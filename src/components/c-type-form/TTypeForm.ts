import CFormNew from "Components/c-type-form/CFormNew";
import CFormView from "Components/c-type-form/CFormView";
import CFormEdit from "Components/c-type-form/CFormEdit";
import CFormDelete from "Components/c-type-form/CFormDelete";

type TTypeForm = {
  new: typeof CFormNew;
  view: typeof CFormView;
  edit: typeof CFormEdit;
  delete: typeof CFormDelete;
}

export default TTypeForm;