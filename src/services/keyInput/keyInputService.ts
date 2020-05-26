export default {     

    restrictChars(event: any, points: number){
        if(event.charCode < 48 || event.charCode > 57 || points > 100000){
            event.preventDefault();
        }        
    }

};
