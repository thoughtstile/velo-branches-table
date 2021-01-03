/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BranchesTable {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLBranchesTableElement extends Components.BranchesTable, HTMLStencilElement {
    }
    var HTMLBranchesTableElement: {
        prototype: HTMLBranchesTableElement;
        new (): HTMLBranchesTableElement;
    };
    interface HTMLElementTagNameMap {
        "branches-table": HTMLBranchesTableElement;
    }
}
declare namespace LocalJSX {
    interface BranchesTable {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "branches-table": BranchesTable;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "branches-table": LocalJSX.BranchesTable & JSXBase.HTMLAttributes<HTMLBranchesTableElement>;
        }
    }
}
