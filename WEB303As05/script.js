/*
    Assignment 05
	Darshan Khanal
*/

$(document).ready(function () {
    // your code here
	class ContentItem {
		constructor(Id, Name, Description, Genre){
			this.Id = Id;
			this.Name = Name;
			this.Description = Description;
			this.Genre = Genre;
		};
		
		updateContentItem(id, name, description, genre){
			if(Id !=this.Id) && (Name, Description,Genre == null)){
				console.log("false");
			}
		};
		
		toString(){
			var inputs = "" ;
			inputs += '<h2>' + this.Name + '</h2>' ;
			inputs +='<p>' + this.Name + '</p>' ;
			inputs +='<div>' +this.Genre +'</div>';
			
			const x = document.getElementById("content-item-list");
			
			x.text(inputs);
			
			$.text('<div> class="content-item-wrapper" id="content-item-ID">' + this.Id)
		};
	};
		var cuisines = [ 1 +"<br />" + "Momos" +"<br />" + "Sukuti" +"<br />" + "Choiela" +"<br />" + "Manchuriean" +"<br />" + "Kachila"];
		
let Id = "" ;

for (let i=0; i < array.length; i++){
	Id += array[i] + "<br />";
}

x.append(cuisines);
$("#content-item-list").css({'border' : '2px solid', 'width' : '200px', 'padding-left' : '60px', 'margin' : '90px'});
	


});