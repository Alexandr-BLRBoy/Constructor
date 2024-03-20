const model = [
  {
    type: 'title', value: 'Hello World from JS!'
  },
  {
    type: 'text', value: 'This is TEXT from HTML!'
  },
  {
    type: 'columns', value: [
      '11111',
      '22222',
      '33333'
    ]
  },
  {
    type: 'image', value: './assets/images/image2.png'
  },
]

const site = document.querySelector('.content');

model.forEach((block) => {
  let html = '';
  
  if(block.type === 'title') {
    html = createTitle(block);
  } else if(block.type === 'text') {
    html = createText(block);
  }else if(block.type === 'columns') {
    html = createColumns(block);
  }else if(block.type === 'image') {
    html = createImage(block);
  }

  site.insertAdjacentHTML("beforeend", html)
})


function createTitle (block) {
  return `
            <div class="row">
              <div class="col-sm">
                <h1>${block.value}</h1>
              </div>
            </div>
          `;
}

function createText (block) {
  return `
            <div class="row">
              <div class="col-sm">
                <p>${block.value}</p>
              </div>
            </div>
          `;
}

function createColumns (block) {


  const html = block.value.map((item) => `<div class='col-sm'>${item}</div>`)

  return `
            <div class="row">
              ${html.join('')}
            </div>
          `;

}

function createImage (block) {
  return `
    <div class='row'>
      <img src='./assets/images/image2.png'>
    </div>
  `;
}