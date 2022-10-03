/*this file was created 2th october 2022 at 22:15 pm.
It was copied from other file obviously hahahahah.
Then I've modifiesd it for my convinience*/



let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.catalogue .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'inline-block';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});