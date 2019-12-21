const inputs = document.querySelectorAll('.control input')
function updates(){
    const changes = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + changes);
    // define documentelement to set style property and decrement this name and value change sizinig values
}
inputs.forEach(input => input.addEventListener('change', updates)) 
//create foreach function to call input and use addeventlistner to attached inputs change to updates function queries
