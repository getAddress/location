export class Options {
    constructor(options = {}) {
        this.id_prefix = "getAddress-location";
        this.css_prefix = "getAddress_location";
        this.output_fields = undefined;
        this.delay = 200;
        this.minimum_characters = 2;
        this.clear_list_on_select = true;
        this.select_on_focus = true;
        this.alt_location_url = undefined;
        this.alt_get_location_url = undefined;
        this.input_class_names = [];
        this.input_show_class_names = [];
        this.list_class_names = [];
        this.container_class_names = [];
        this.suggestion_class_names = [];
        this.suggestion_focused_class_names = [];
        this.container_focused_class_names = [];
        this.highlight_suggestion = true;
        this.highlight_suggestion_start_tag = "<b>";
        this.highlight_suggestion_end_tag = "</b>";
        this.list_width = undefined;
        this.suggestion_count = 6;
        this.suggestion_template = "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
        this.suggestion_template_outcode = "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
        this.suggestion_template_postcode = "{postcode}{postcode,, }{outcode}{outcode,, }{area}{area,, }{town_or_city}{county,, }{county}";
        this.filter = undefined;
        this.bind_output_fields = true;
        this.input_focus_on_select = true;
        this.debug = false;
        this.enable_get_location = true;
        this.set_default_output_field_names = true;
        this.clear_on_select = false;
        Object.assign(this, options);
    }
}
//# sourceMappingURL=Options.js.map