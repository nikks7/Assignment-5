function specials(){
	var myimages= new Array();
	
	myimages[1]="photo5.jpg"
	myimages[2]="photo6.jpg"
	myimages[3]="photo7.jpg"
	myimages[4]="photo8.jpg"
	myimages[5]="photo9.jpg"
	myimages[6]="photo10.jpg"
	myimages[7]="photo11.jpg"
myimages[8]="photo12.jpg"
myimages[9]="photo13.jpg"
myimages[10]="photo14.jpg"
myimages[11]="photo15.jpg"

var names=new Array();
names[1]="BEEF"
names[2]="HIMA-SHU"
names[3]="EGG-CHIMA"
names[4]="NU-DE-SA"
names[5]="CHI-MU"
names[6]="VEG NU-DI-SA"
names[7]="CHECKEN-PASA"
names[8]="HA-FI-KA"
names[9]="EGG-DISH"
names[10]="SPECIAL-EGG-DISH"
names[11]="VEG-PASTA"



var rnd=Math.floor(Math.random()*myimages.length);
if(rnd==0){
	rnd=1;
}
document.write('<img src="'+myimages[rnd]+'" border="0" width="350px" height="350px" padding="10px" margin="30px">' +names[rnd])

}