import ReactDOM from 'react-dom/client';
import FragmentComponent from './10_Fragments';
import {ClassComponent,FunctionalComponent} from './2_Props_and_State'
import EventHandler from './4_Event_Handling';
import MethodAsPropsParent from './5_Methods_as_props';
import CondtionalComponent from './6_Condtional_rendering';
import ListComponent from './7_List_rendering';
import FormComponent from './8_Basic_form_handling';
import UpdateComponent from './9_UpdateLifecycle';
import PureComponentExample from './11_Pure_Component';
import RefParentComponent from './12_Refs_For_Focus';
import { Portals } from './13_Portals';
import { ErrorParent } from './14_Error_Boundary';
import ParentHOC from './15_Higher_Order_Functions';
import ParentRnderProp from './16_Render_props';
import ParentContext from './17_Context-Demo';
import ParentDynamicContext from './17_Updating_Context_From_Children';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ParentDynamicContext/>
);

