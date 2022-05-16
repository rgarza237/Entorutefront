import { Link } from 'react-router-dom'

function CardAlbum(props:any) {
  const { album } = props
  
  return (
    <Link to={{
      pathname: `/album/${album._id}`
    }}>
      <div className="card-album">
        <h3>{ album.albumName}</h3>

        <img
          src={album.image}
          alt="disco"
        />
      </div>
    </Link>
  );
}

export default CardAlbum