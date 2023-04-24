//read in a csv on initialization of object
//automatically set num of outlets based on num of columns in csv
//send value of each column out of the respective outlet index on a bang
//outlet values are all strings

var csv_filename = "glucose.csv";

if (jsarguments.length>1)
	csv_filename = jsarguments[1];

var f = new File(csv_filename)
var data = f.readline();
data = f.readline(); //pour sauter la première ligne du fichier csv
var numColumns = data.split(",").length
//je créé une sortie de plus que le nombre de colonne pour pouvoir avoir une sortie pour la liste de valeurs de la cinquième colonne
outlets = numColumns + 1; 


function bang()
{

	if (!f.isopen) {
		error("could not open file:" + numColumns + csv_filename)
		return
	}
	
//quand on arrive à la dernière ligne
	if (f.position >= f.eof) {
		//reached end of file, looping back to start of file
		//set file pos to 0, then read in header line
		f.position = 0 //sauf qu'on a vu que la première ligne n'est pas au début du fichier mais au 622 bytes
		f.readline()
	}

		
	data = f.readline()	
	var parsedData = data.split(",")
	parsedData.forEach(function(columnValue, i) { 
	outlet(i,columnValue.trim());}

	
);
}



//Tableau dans lequel je vais mettre toutes les valeurs de la cinquième colonne 
var column5 = new Array();
//Fonction pour sortir toutes les valeurs de la cinquième colonne
function getAll(){
	//si je suis à la fin du fichier
	if (f.position >= f.eof) {
		//je retourne au début
		f.position = 0
		//je saute deux lignes
		f.readline()
		f.readline()
	}	

//je parcours le fichier ligne par ligne depuis la troisième ligne jusqu'à la dernière	
for(var i = f.position ; i <= f.eof ; i++){
		//je stocke la ligne dans une variable
		data = f.readline();
		//je créé un tableau en découpant toutes les chaines de caractères entre les virgules
		var parsedData = data.split(",");
		//j'ajoute au tableau "column5" la valeur de la cinquième colonne (index des tableaux commence à 0)
		column5.push(parsedData[4]);
		//j'incrémente l'index de la boucle for à la ligne actuelle
i = f.position

}

//post(column5.length)

//je sors sur la 19ème sortie (l'indexe des sorties commence à 0) le tableau avec les valeurs de la 5eme colonne
/* column5.forEach(function(column5Value,i) {
    outlet(numColumns,column5Value)

})*/
//post(column5);
outlet(4, column5);
//je l'affiche dans la console

}


//Tableau dans lequel je vais mettre toutes les valeurs de la cinquième colonne 
var column3 = new Array();
//Fonction pour sortir toutes les valeurs de la cinquième colonne
function getAll(){
	//si je suis à la fin du fichier
	if (f.position >= f.eof) {
		//je retourne au début
		f.position = 0
		//je saute deux lignes
		f.readline()
		f.readline()
	}	

//je parcours le fichier ligne par ligne depuis la troisième ligne jusqu'à la dernière	
for(var i = f.position ; i <= f.eof ; i++){
		//je stocke la ligne dans une variable
		data = f.readline();
		//je créé un tableau en découpant toutes les chaines de caractères entre les virgules
		var parsedData = data.split(",");
		//j'ajoute au tableau "column5" la valeur de la cinquième colonne (index des tableaux commence à 0)
		column3.push(parsedData[2]);
		//j'incrémente l'index de la boucle for à la ligne actuelle
i = f.position

}

//post(column5.length)

//je sors sur la 19ème sortie (l'indexe des sorties commence à 0) le tableau avec les valeurs de la 5eme colonne
/* column5.forEach(function(column5Value,i) {
    outlet(numColumns,column5Value)

})*/
//post(column5);
outlet(2, column3);
//je l'affiche dans la console

}

