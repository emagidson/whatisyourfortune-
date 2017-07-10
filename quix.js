function saveUserSelection(){
	// console.log(this);
	var userSelection = $(this).data('points');
	var questionName = $(this).data('questionname');
	sessionStorage.setItem(questionName, userSelection);
}

function whenDocumentIsReady(e){
	if ($('body').hasClass('question') ) {

	
	$('.options li').on('click', saveUserSelection);
		}

	if ($('body').hasClass('result') ) {

	}

}

fuction determineResult() {
	var numSiblings = sessionStorage.getItem('numberOfSiblings')
	var numVehicles = sessionStorage.getItem('numberOfVehicles')

}

$(document).on('ready', whenDocumentIsReady);

// sessionStorage.getItem();

// sessionStorage.removeItem();