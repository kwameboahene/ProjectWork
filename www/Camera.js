

    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // device APIs are available
    //
    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
    }


    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {

        // Show the selected image
        var smallImage = document.getElementById('smallImage');
        smallImage.style.display = 'block';
        smallImage.src = imageURI;
        window.localStorage.setItem("photodata", imageURI);
    }


    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
      self.location.href = "#admin-page";
    }


  


    // Called if something bad happens.
    //
    function onFail(message) {
      console.log('Failed because: ' + message);
    }

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        //alert("Response =" + r.response);
        console.log("Sent = " + r.bytesSent);
    }

    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }

