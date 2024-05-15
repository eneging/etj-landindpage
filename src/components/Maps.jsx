
function Maps() {
    return (
      <div style={{ height: '300px', width: '100%' }}>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=4.6734314,-74.0479366&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C4.6734314,-74.0479366&markers=color:red%7Clabel:B%7C4.7472634,-74.0896803&key=YOUR_API_KEY`}
          alt="Mapa de Bogotá, Colombia"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }
  
  export default Maps;
  
