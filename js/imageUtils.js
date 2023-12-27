
export function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    let image = document.getElementById('preview');
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.backgroundSize = 'contain';

    reader.onload = function (e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById('preview').src = "";
  }
}
