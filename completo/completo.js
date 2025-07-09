let quantity = 2;

document.getElementById('increase').onclick = () => {
  quantity++;
  document.getElementById('quantity').innerText = quantity;
};

document.getElementById('decrease').onclick = () => {
  if (quantity > 1) quantity--;
  document.getElementById('quantity').innerText = quantity;
};

document.getElementById('add').onclick = () => {
  
};