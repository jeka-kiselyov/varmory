import normalizeQuasarApi from './normalizeQuasarApi.js';

import apiExtends from 'quasar/src/api.extends.json';

import useAnchor from 'quasar/src/composables/private.use-anchor/use-anchor.json';
import useAnchorStatic from 'quasar/src/composables/private.use-anchor/use-anchor-static.json';
import useField from 'quasar/src/composables/private.use-field/use-field.json';
import useFile from 'quasar/src/composables/private.use-file/use-file.json';
import useFullscreen from 'quasar/src/composables/private.use-fullscreen/use-fullscreen.json';
import useModelToggle from 'quasar/src/composables/private.use-model-toggle/use-model-toggle.json';
import usePanel from 'quasar/src/composables/private.use-panel/use-panel.json';
import usePanelChild from 'quasar/src/composables/private.use-panel/use-panel.child.json';
import usePortal from 'quasar/src/composables/private.use-portal/use-portal.json';
import useRatio from 'quasar/src/composables/private.use-ratio/use-ratio.json';
import useRouterLink from 'quasar/src/composables/private.use-router-link/use-router-link.json';
import useSize from 'quasar/src/composables/private.use-size/use-size.json';
import useTransition from 'quasar/src/composables/private.use-transition/use-transition.json';
import useValidate from 'quasar/src/composables/private.use-validate/use-validate.json';
import useForm from 'quasar/src/composables/use-form/private.use-form.json';

import useBtn from 'quasar/src/components/btn/use-btn.json';
import useCheckbox from 'quasar/src/components/checkbox/use-checkbox.json';
import useDatetime from 'quasar/src/components/date/use-datetime.json';
import useFab from 'quasar/src/components/fab/use-fab.json';
import useMask from 'quasar/src/components/input/use-mask.json';
import useSlider from 'quasar/src/components/slider/use-slider.json';
import useTab from 'quasar/src/components/tabs/use-tab.json';
import useVirtualScroll from 'quasar/src/components/virtual-scroll/use-virtual-scroll.json';

const mixinLookup = {
    'composables/private.use-anchor/use-anchor': useAnchor,
    'composables/private.use-anchor/use-anchor-static': useAnchorStatic,
    'composables/private.use-field/use-field': useField,
    'composables/private.use-file/use-file': useFile,
    'composables/private.use-fullscreen/use-fullscreen': useFullscreen,
    'composables/private.use-model-toggle/use-model-toggle': useModelToggle,
    'composables/private.use-panel/use-panel': usePanel,
    'composables/private.use-panel/use-panel.child': usePanelChild,
    'composables/private.use-portal/use-portal': usePortal,
    'composables/private.use-ratio/use-ratio': useRatio,
    'composables/private.use-router-link/use-router-link': useRouterLink,
    'composables/private.use-size/use-size': useSize,
    'composables/private.use-transition/use-transition': useTransition,
    'composables/private.use-validate/use-validate': useValidate,
    'composables/use-form/private.use-form': useForm,
    'components/btn/use-btn': useBtn,
    'components/checkbox/use-checkbox': useCheckbox,
    'components/date/use-datetime': useDatetime,
    'components/fab/use-fab': useFab,
    'components/input/use-mask': useMask,
    'components/slider/use-slider': useSlider,
    'components/tabs/use-tab': useTab,
    'components/virtual-scroll/use-virtual-scroll': useVirtualScroll,
};

export default function normalize(raw) {
    return normalizeQuasarApi(raw, { apiExtends, mixinLookup });
}
