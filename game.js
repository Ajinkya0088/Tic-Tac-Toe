var restart = document.querySelector("#b");

console.log("Connected");
var squares = document.querySelectorAll('td');


function clearboard()
{
  for(var i = 0; i<squares.length; i++)
  {
    squares[i].textContent = '';
  }

}

restart.addEventListener('click',clearboard);


function changeMarker()
{
  if(this.textContent === '')

  {
      this.textContent = "x";
  }
  else if (this.textContent === 'x') {
    this.textContent = 'o';
  }else
  {
    this.textContent = '';
  }
  }

  for(var i = 0; i<squares.length; i++)
  {
    squares[i].addEventListener('click',changeMarker);
  }
