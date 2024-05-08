const pharmacyListDiv = document.querySelector('#pharmacy-list');
const searchInput = document.querySelector('#search');

const pharmacyList = [
  {
    name: 'Starlight Pharmacy',
    address: '123 Main St Nairobi',
    bgColor: '#e1dcf3',
  },
  {
    name: 'Green Cross Pharmacy',
    address: '456 Main St Eldoret',
    bgColor: '#f3e1e1',
  },
  {
    name: 'Sunshine Pharmacy',
    address: '789 Main St Nakuru',
    bgColor: '#e1f3e1',
  },
  {
    name: 'Moonlight Pharmacy',
    address: '101 Main St Mombasa',
    bgColor: '#f3f3e1',
  },
  {
    name: 'Some Pharmacy',
    address: '101 Main St Kitale',
    bgColor: '#e1dcf3',
  },
  {
    name: 'Another Pharmacy',
    address: '101 Main St Kisumu',
    bgColor: '#f3e1e1',
  },
  {
    name: 'Pharmacy 1',
    address: '101 Main St Thika',
    bgColor: '#e1f3e1',
  },
  {
    name: 'Pharmacy 2',
    address: '101 Main St Nyeri',
    bgColor: '#f3f3e1',
  },
  {
    name: 'Pharmacy 3',
    address: '101 Main St Meru',
    bgColor: '#e1dcf3',
  },
  {
    name: 'Pharmacy 4',
    address: '101 Main St Kericho',
    bgColor: '#f3e1e1',
  },
  {
    name: 'Pharmacy 5',
    address: '101 Main St Naivasha',
    bgColor: '#e1f3e1',
  },
  {
    name: 'Pharmacy 6',
    address: '101 Main St Nanyuki',
    bgColor: '#f3f3e1',
  },
];

const mappedPharms = pharmacyList.map((pharmacy) => {
  const li = document.createElement('li');
  li.style.backgroundColor = pharmacy.bgColor;
  li.classList.add('pharmacy');
  li.innerHTML = `
    <h4>${pharmacy.name}</h4>
    <p>${pharmacy.address}</p>
  `;
  return li;
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  pharmacyListDiv.append(...mappedPharms);
});

searchInput.addEventListener('input', (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filteredPharms = pharmacyList.filter((pharmacy) => {
    return (
      pharmacy.name.toLowerCase().includes(searchValue) ||
      pharmacy.address.toLowerCase().includes(searchValue)
    );
  });

  const mappedFilteredPharms = filteredPharms.map((pharmacy) => {
    const li = document.createElement('li');
    li.style.backgroundColor = pharmacy.bgColor;
    li.classList.add('pharmacy');
    li.innerHTML = `
        <h4>${pharmacy.name}</h4>
        <p>${pharmacy.address}</p>
        `;
    return li;
  });

  pharmacyListDiv.innerHTML = '';
  pharmacyListDiv.append(...mappedFilteredPharms);
});
