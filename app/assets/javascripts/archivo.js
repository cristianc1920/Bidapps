var idLead = 0;

function createLeadBit() {
  var name = $('#Name').val();

  var login = 'cristianc1920@gmail.com';
  var pass = 'nitufaco323488';
  var title = $('#name').val();
  var EMAIL_WORK = $('#email').val();
  var STATUS_DESCRIPTION = $('#message').val(); 
  var COMPANY_TITLE = 'bidapps';
  
  var url = "https://bidapps.bitrix24.com/crm/configs/import/lead.php?LOGIN=cristianc1920@gmail.com&PASSWORD=nitufaco323488&TITLE=" + title + "&EMAIL_WORK=" + EMAIL_WORK + "&STATUS_DESCRIPTION=" + STATUS_DESCRIPTION + "&COMPANY_TITLE=" + COMPANY_TITLE;

  if (EMAIL_WORK == '' || STATUS_DESCRIPTION == '' || COMPANY_TITLE == ''){
    alert('Por favor digita todos los campos.');
  }else{
    console.log(url)
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function(response) {
        console.log(response);
      },
      error: function(e) {
         console.log(e);
      }
    });
  }

}

function getCarsLead() {
	$(".qw").remove();
	idLead = $('#listLeads').val();
	console.log("selecion ===" + idLead);
  	var url = "https://testmiamicar-developer-edition.na16.force.com/miamicar/services/apexrest/carsServices.json?id="+ idLead;
    $.ajax({
      type: 'GET',
      url: url,
      contentType: "application/json",
      dataType: 'jsonp',
      success: function(response) {
        console.log(response);
        $.each( response, function( i, item ) {
        $( "<option value=" + item.Id +" class='qw'>"+ item.fullName__c +"</option>").appendTo( "#listCars" );
        });
      },
      error: function(e) {
        console.log("error");
      }
    });
}

