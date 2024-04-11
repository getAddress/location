import {LocationFilter} from "getaddress-api";
import { OutputFields } from "./OutputFields";

export class Options 
{
    id_prefix?:string = "getAddress-location";
    css_prefix?:string = "getAddress_location";
    output_fields?:Partial<OutputFields> = undefined;
    delay:number = 200;
    minimum_characters:number = 2; 
    clear_list_on_select = true;
    select_on_focus = true;
    alt_location_url?:string = undefined;
    alt_get_location_url?:string = undefined;
    input_class_names:string[] = [];
    input_show_class_names:string[] = [];
    list_class_names:string[] = [];
    container_class_names:string[] = [];
    suggestion_class_names:string[] = [];
    suggestion_focused_class_names:string[] = [];
    container_focused_class_names:string[] = [];
    highlight_suggestion = true;
    highlight_suggestion_start_tag = "<b>";
    highlight_suggestion_end_tag = "</b>";
    list_width?:string = undefined;
    suggestion_count = 6;
    suggestion_template= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    suggestion_template_outcode= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    suggestion_template_postcode= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    filter?:Partial<LocationFilter>=undefined;
    bind_output_fields=true;
    input_focus_on_select=true;
    debug=false;
    enable_get_location=true;
    set_default_output_field_names=true;
    clear_on_select = false;

    constructor(options: Partial<Options> = {})
    {
        Object.assign(this, options);
    }
}


