function DreamCheckFile() {
  this.errCode = 0;
  if (typeof DreamCheckFile._initialized == "undefined") {
    DreamCheckFile.prototype.checkFileTypeAndSize = function (inputId, allowedTypes, maxSize, typeErrorMsg, sizeErrorMsg) {
      if (allowedTypes === undefined) {
        allowedTypes = [];
      }

      if(maxSize === undefined) {
        maxSize = 1024 * 1024;
      }

      // Check file type (without .)
      var fileInput = document.getElementById(inputId);
      var filePath = fileInput.value;
      var fileType = filePath.substring(filePath.lastIndexOf('.') + 1);
      if(fileType == filePath) {
        fileType = '';
      }
      if (allowedTypes.length > 0 && !this.inArray(fileType, allowedTypes)) {
        this.errCode = 1;
        if (typeErrorMsg !== undefined && typeErrorMsg !== '') {
          alert(typeErrorMsg);
        }

        return false;
      }

      // Check file size (bytes)
      if (fileInput.files[0].size > maxSize) {
        this.errCode = 2;
        if (sizeErrorMsg !== undefined && sizeErrorMsg !== '') {
          alert(sizeErrorMsg);
        }

        return false;
      }

      return true;
    }

    DreamCheckFile.prototype.inArray = function (needle, haystack) {
      var i
      for (i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
          return true;
        }
      }

      return false;
    }

    DreamCheckFile._initialized = true;
  }
}
