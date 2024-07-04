declare module 'sanitize-html' {
    interface IFrame {
      tag: string;
      allowedAttributes?: string[];
    }
  
    interface AllowedAttributes {
      [index: string]: string[];
    }
  
    interface SanitizeHtmlOptions {
      allowedTags?: string[] | false;
      allowedAttributes?: AllowedAttributes | false;
      selfClosing?: string[];
      allowedSchemes?: string[];
      allowedSchemesByTag?: { [index: string]: string[] };
      allowedSchemesAppliedToAttributes?: string[];
      allowProtocolRelative?: boolean;
      enforceHtmlBoundary?: boolean;
      exclusiveFilter?: (frame: IFrame) => boolean;
      nonTextTags?: string[];
    }
  
    function sanitize(dirty: string, options?: SanitizeHtmlOptions): string;
  
    export = sanitize;
  }
  