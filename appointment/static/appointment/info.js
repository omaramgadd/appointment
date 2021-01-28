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

    	var countries = $('.selectpicker').val();
    	
    	if (countries.length == 0){
    		$('#company_input').prop('disabled', true);
    	}
    	else{
    		$('#company_input').prop('disabled', false);
    	}
        
        company.innerHTML = ''
        for (i = 0; i < countries.length; i++){
            let c = countries[i]
            fetch(`/companies/${c}/empty`)
            .then(response => response.json())
            .then(companiez => {
                for (i = 0; i < companiez.length; i++){
                    let cc = companiez[i].fields.company_name
                    let c1 = document.createElement("option");
                    c1.setAttribute("value", cc);
                    company.appendChild(c1)
                }
            })
        }
        
    })

    document.querySelector('#the_form').onsubmit = () => {
    	if(confirm('press ok to confirm your request')){
    		console.log('submitted')
            var countries = $('.selectpicker').val();
            for (i = 0; i < countries.length; i++){
                let c = countries[i]
                let co = document.querySelector('#company_input').value
                fetch(`/companies/${c}/${co}`, {method: 'POST'})
                .then(response => response.json())
                .then(data => console.log(data))
            }
    	}
    	else{
    		return false
    	}
    }





})
