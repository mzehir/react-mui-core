export function file_picker_callback(cb, value, meta) {
  var input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");

  /*
    Note: In modern browsers input[type="file"] is functional without
    even adding it to the DOM, but that might not be the case in some older
    or quirky browsers like IE, so you might want to add it to the DOM
    just in case, and visually hide it. And do not forget do remove it
    once you do not need it anymore.

    Not: Modern tarayıcılarda input[type='file'] DOM'a eklenmeden de işlevsel olabilir, 
    ancak bu durum eski veya IE gibi garip tarayıcılarda geçerli olmayabilir. Bu nedenle, 
    güvenilir olması açısından DOM'a eklemeyi ve görsel olarak gizlemeyi düşünebilirsiniz. 
    Ve unutmayın, artık ihtiyacınız olmadığında onu kaldırmayı unutmayın.
    */

  input.onchange = function () {
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function () {
      /*
    Note: Now we need to register the blob in TinyMCEs image blob
    registry. In the next release this part hopefully won't be
    necessary, as we are looking to handle it internally.

    Şimdi blob'u TinyMCE'nin resim blob kaydına kaydetmemiz gerekiyor.
    Umarım bir sonraki sürümde bu kısım gerekli olmayacak, 
    çünkü bunu içsel olarak ele almayı planlıyoruz.
    */
      var id = "blobid" + new Date().getTime();
      var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
      var base64 = reader.result.split(",")[1];
      var blobInfo = blobCache.create(id, file, base64);
      blobCache.add(blobInfo);

      /* call the callback and populate the Title field with the file name */
      /* Callback'i çağırın ve Başlık alanını dosya adıyla doldurun. */

      cb(blobInfo.blobUri(), { title: file.name });
    };
    reader.readAsDataURL(file);
  };

  input.click();
}
