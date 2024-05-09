import { ProfiDoc } from "./profi-doc";
import {WorkDoc} from "./work-doc"

import css from "./documents.module.css";

export function Documents() {
    return (
        <div>
            <div className={css.cards}>
                <ProfiDoc />
                <WorkDoc />
            </div>
        </div>
    );
}