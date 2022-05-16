import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import NavBar from '../components/navbar'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core'



function AlbumsPage() {
  const [albumData, setAlbumData] = useState([])
  const { idAlbum } = useParams() as { idAlbum: string };

  useEffect(() => {
    async function getAlbum() {
      const url = `http://3.218.67.164:10035/album/${idAlbum}/song`
      const albums = await fetch(url).then((res) => res.json())
      
      setAlbumData(albums.data.songs)
    }
    getAlbum()
  },[idAlbum])

  
  return (
    <Container maxWidth="sm">
      <div className="border-nav"></div>
      <NavBar />
      <SideMenu />
      <h1>Album</h1>
      <div className="section-discks">
        <ul id="playlist">
          {
            albumData.map((song, i) => {
              console.log(song);
              return (<li key={i}>
                <Link to={{
                  pathname: `/player/${song['_id']}`
                }}>
                  {song['album']['albumName']} - {song['name']}
                </Link>
                
              </li>)
            })
          }
          
      </ul>
      </div> 
    </Container>
  );
}

export default AlbumsPage;