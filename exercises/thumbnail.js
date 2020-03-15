try {

  function thumbnail(obj) {
    const divEl = document.createElement('DIV');
    divEl.className = 'thumbnail-container';

    const imgEl = document.createElement('IMG');
    imgEl.src = obj.src;
    imgEl.className = 'thumbnail to-the-right';
    debugger;
    
    switch (obj.color){
      case "black":
        imgEl.alt = 'the color ' + obj.color;
        break;
      case "red":
        imgEl.alt = 'the color ' + obj.color;
        break;
      case "purple":
        imgEl.alt = 'the color ' + obj.color;
        break;
    }

    aEl.appendChild(imgEl);

    return divEl;
  }


  testComponent.attributesToTest = [
    'nodeName', "childElementCount", "href", 'src', 'className', 'children'
  ];

  const testCases = [
    {
      name: 'first',
      args: [{
        color: "black",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png"
      }],
      expected: {
        nodeName: 'DIV',
        childElementCount: 1,
        className: 'thumbnail-container',
        children: [
          {
            nodeName: 'IMG',
            childElementCount: 0,
            src: "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png",
            className: 'thumbnail to-the-right',
            alt: "the color black"
          }
        ]
      }
    },
    {
      name: 'second',
      args: [{
        color: "red",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/240px-Color_icon_red.svg.png"
      }],
      expected: {
        nodeName: 'DIV',
        childElementCount: 1,
        className: 'thumbnail-container',
        children: [
          {
            nodeName: 'IMG',
            childElementCount: 0,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/240px-Color_icon_red.svg.png",
            className: 'thumbnail to-the-right',
            alt: "the color red"
          }
        ]
      }
    },
    {
      name: 'third',
      args: [{
        color: "purple",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/240px-Color_icon_purple_v2.svg.png"
      }],
      expected: {
        nodeName: 'DIV',
        childElementCount: 1,
        className: 'thumbnail-container',
        children: [
          {
            nodeName: 'IMG',
            childElementCount: 0,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/240px-Color_icon_purple_v2.svg.png",
            className: 'thumbnail to-the-right',
            alt: "the color purple"
          }
        ]
      }
    },
  ];




  const div = document.createElement('div');

  const header = document.createElement('h2')
  header.innerText = thumbnail.name;
  div.id = thumbnail.name;
  div.appendChild(header);
  div.appendChild(document.createElement('br'));

  testComponent(
    thumbnail,
    testCases,
    div
  );

  document.getElementById('rendered-components').appendChild(div);
  document.getElementById('rendered-components').appendChild(document.createElement('hr'));

} catch (err) {
  console.log(err);
}

