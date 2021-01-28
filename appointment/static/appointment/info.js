document.addEventListener('DOMContentLoaded', () =>{
	$('.flexdatalist').flexdatalist({
		minLength: 2
	});
	$('.flexdatalist').flexdatalist('minLength', 0)
	$('.selectpicker').selectpicker('val');
	
	$("#info_1").popover({
        placement: 'right',
        html: true,
        content :'<button type="button" id="close" class="close" onclick="$(&quot;#info_1&quot;).popover(&quot;hide&quot;);">&times;</button>' + "You could select more than one country",
    });
    $("#info_2").popover({
        placement: 'right',
        html: true,
        content :'<button type="button" id="close" class="close" onclick="$(&quot;#info_2&quot;).popover(&quot;hide&quot;);">&times;</button>' + "You could select / add your company  ",
    });
    $('#company_input').prop('disabled', true);
    let country = document.querySelector('#country_picker')
    let company = document.querySelector("#company_picker")
    let c1_exist = false
    let c3_exist = false
    country.addEventListener('change', () =>{
    	var data = $('.flexdatalist').val();
    	console.log(data)
    	var selectedItem = $('.selectpicker').val();
    	console.log(selectedItem)
    	if (selectedItem.length == 0){
    		$('#company_input').prop('disabled', true);
    	}
    	else{
    		$('#company_input').prop('disabled', false);
    	}



    	if (selectedItem.includes('Country 1')){
    		if (c1_exist == false){
				let c1 = document.createElement("option");
				c1.setAttribute("value", "Company 1");
				company.appendChild(c1)
	    		
				let c2 = document.createElement("option");
				c2.setAttribute("value", "Company 2");
				company.appendChild(c2)
				c1_exist = true
			}
    	}
    	else{
    		$("#company_picker option[value='Company 1']").remove()
    		$("#company_picker option[value='Company 2']").remove()
    		c1_exist = false
    	}

    	if (selectedItem.includes('Country 2')){
    		if (c3_exist == false){
	    		let c3 = document.createElement("option");
				c3.setAttribute("value", "Company 3");
				company.appendChild(c3)
				c3_exist = true
			}
    	}
    	else{
    		$("#company_picker option[value='Company 3']").remove()
    		c3_exist = false
    	}
    })

    document.querySelector('#the_form').onsubmit = () => {
    	if(confirm('press ok to confirm your request')){
    		console.log('submitted')
            
    	}
    	else{
    		return false
    	}
    }





})
