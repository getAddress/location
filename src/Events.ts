import { LocationAddress, LocationSuggestion } from "getaddress-api";

export class LocationSelectedEvent 
{
    static dispatch(element:HTMLElement|Document,id:string,location:LocationAddress){
        
        const evt  = new Event("getaddress-location-selected",{bubbles:true}) as any;
        evt["location"] = location;
        evt["id"] = id;
        element.dispatchEvent(evt);
    }
}

export class LocationSelectedFailedEvent 
{
    static dispatch(element:HTMLElement|Document,id:string, status:number, message:string){
        
        const evt  = new Event("getaddress-location-selected-failed",{bubbles:true}) as any;
        evt["status"] = status;
        evt["message"] = message;
        evt["id"] = id;

        element.dispatchEvent(evt);
    }
}

export class SuggestionsEvent 
{
    static dispatch(element:HTMLElement|Document,query:string,suggestions:LocationSuggestion[]){
        
        const evt  = new Event("getaddress-location-suggestions",{bubbles:true}) as any;
        evt["suggestions"] = suggestions;
        evt["query"] = query;
        element.dispatchEvent(evt);
    }
}

export class SuggestionsFailedEvent 
{
    static dispatch(element:HTMLElement|Document, query:string,status:number, message:string){
        
        const evt  = new Event("getaddress-location-suggestions-failed",{bubbles:true}) as any;
        evt["status"] = status;
        evt["message"] = message;
        evt["query"] = query;
        element.dispatchEvent(evt);
    }
}

