let data = [
    {
      name: 'Tinkerbell',
      age: '13'
    },
    {
      name: 'Oliver',
      age: '8'
    },
    {
      name: 'Lilo',
      age: '8'
    },
    {
      name: 'Brainy',
      age: '7'
    },
    {
      name: 'Moana',
      age: '5'
    },
    {
      name: 'Flynn',
      age: '2'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n');