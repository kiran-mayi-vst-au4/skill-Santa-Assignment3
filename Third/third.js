function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('width-height').innerHTML = "<h1> " + width + "  * " + height + "</h1>";
}