import {LocationFilter} from "getaddress-api";
import { IOutputFields } from "./OutputFields";

export class Options 
{
    id_prefix?:string = "getAddress-location";
    css_prefix?:string = "getAddress_location";
    output_fields:IOutputFields = undefined;
    delay:number = 200;
    minimum_characters:number = 2; 
    clear_list_on_select = true;
    select_on_focus = true;
    alt_location_url:string = undefined;
    alt_get_location_url:string = undefined;
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
    list_width:string = undefined;
    suggestion_count = 6;
    suggestion_template= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    suggestion_template_outcode= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    suggestion_template_postcode= "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
    filter:LocationFilter=undefined;
    bind_output_fields=true;
    input_focus_on_select=true;
    debug=false;
    enable_get_location=true;
    set_default_output_field_names=true;
    clear_on_select = false;

    constructor(options:IOptions = {})
    {
        for (const prop in options) {
            if (options.hasOwnProperty(prop) && typeof options[prop] !== 'undefined') {
                this[prop] = options[prop];
            }
        }
    }
}

export interface IOptions{
    id_prefix?:string;
    css_prefix?:string;
    delay?:number;
    minimum_characters?:number;
    clear_list_on_select?:boolean;
    select_on_focus?:boolean;
    alt_location_url?:string;
    alt_get_location_url?:string;
    input_class_names?:string[];
    input_show_class_names?:string[];
    list_class_names?:string[];
    container_class_names?:string[];
    suggestion_class_names?:string[];
    highlight_suggestion?:boolean;
    highlight_suggestion_start_tag?:string;
    highlight_suggestion_end_tag?:string;
    list_width?:string;
    suggestion_count?:number;
    suggestion_template?:string;
    suggestion_template_postcode?:string;
    suggestion_template_outcode?:string;
    filter?:LocationFilter;
    bind_output_fields?:boolean;
    output_fields?:IOutputFields;
    input_focus_on_select?:boolean;
    debug?:boolean;
    enable_get_location?:boolean;
    container_focused_class_names?:string[];
    suggestion_focused_class_names?:string[];
    set_default_output_field_names?:boolean;
    clear_on_select?:boolean;
}

