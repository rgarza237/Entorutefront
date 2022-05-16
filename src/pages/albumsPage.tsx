import React, { useState, useEffect } from 'react';

import NavBar from '../components/navbar'
import CardAlbum from '../components/cardAlbum'
import SideMenu from '../components/sideMenu'

import { Container } from '@material-ui/core';



function AlbumsPage() {
  const [albumsData, setAlbums] = useState([])
  useEffect(() => {
    async function getAlbums() {
      const url = `http://3.218.67.164:10035/album`
      const albums = await fetch(url).then((res) => res.json())
      // console.log(albums.data.album);
      setAlbums(albums.data.album)
    }
    getAlbums()
  }, [])

  
  return (
    <Container maxWidth="sm">
      <div className="border-nav"></div>
      <NavBar />
      <SideMenu />
      <h1>Albums</h1>
      <div className="section-discks">
        {albumsData.map((disck, i) => {
          return <CardAlbum album={disck} key={i}/>;
        })}
      </div> 
    </Container>
  );
}

export default AlbumsPage;