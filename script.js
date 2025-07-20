document.addEventListener('DOMContentLoaded',()=>{
  const map=L.map('map').setView([35.365,133.051],9);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:19, attribution:'© OpenStreetMap'
  }).addTo(map);

  const spots=[
    {name:"稲佐の浜",coords:[35.389,133.051]},
    {name:"出雲大社",coords:[35.393,132.940]},
    {name:"島根ワイナリー",coords:[35.375,132.923]},
    {name:"日御碕灯台",coords:[35.389,132.824]}
  ];

  spots.forEach(s=>{
    L.marker(s.coords).addTo(map).bindPopup(s.name);
  });

  // ルート（ポリライン）
  const routeCoords=spots.map(s=>s.coords);
  L.polyline(routeCoords,{color:'blue'}).addTo(map);

  // 現在地取得
  map.locate({setView:true, maxZoom:12});
});
