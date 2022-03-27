function upDate(previewPic)
    {  
    var newimg=previewPic.src;
    document.getElementById('image').style.backgroundImage = `url('${newimg}')`;
    document.getElementById('image').style.backgroundColor="#bf8ad4"; /*change the url for the background image of the div with the id = "image" 
    to the source file of the preview image*/
    console.log(newimg);
    document.getElementById('image').innerHTML=previewPic.alt;
    /*Change the text of the div with the id = "image" 
       to the alt text of the preview image 
       */             
    }

function unDo()
    {
    document.getElementById('image').style.backgroundColor="#8e68ff";
    document.getElementById('image').style.backgroundImage = `url('')`;/*Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.*/

    document.getElementById('image').innerHTML="Hover over an image to display the alt text.";/*Change the text of the div with the id = "image" 
    back to the original text.*/
    }

         
       