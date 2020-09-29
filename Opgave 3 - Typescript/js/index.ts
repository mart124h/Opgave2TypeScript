new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        stringInput: "",
        result: "",
        operation: "upper",
        
    },
    methods: {
        stringMani() {


            if(this.operation=="upper")
            {
                this.result = this.stringInput.toUpperCase();
            }

            if(this.operation=="lower")
            {
                this.result = this.stringInput.toLowerCase();
            }

            
        }
}})