import React from 'react'
import styled from 'styled-components'
import Content from '../styles/Home/HomeContainer.styled'
// import CreateSongWrapper from '../styles/CreateSonWrapper.styled'


const Container = styled.div`
display:flex;
flex-direction:column;
background-color: #f0f0f0; 
align-items:center;
justify-content:center;
   
`

const CreateSong = () => {
  return (
    <Content>
      <Container>
        <p>Create a new song</p>
        <form action='submit'>
            <label htmlFor='singer'>Name of Singer:</label>
            <input type="text" id="singer" name="singer" required/>

            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required/>

            <label htmlFor="release-date">Release Date:</label>
            <input type="date" id="release-date" name="release-date" required/>

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>

            <label htmlFor="genre">Genre:</label>
            <select id="genre" name="genre" required>
              <option value="">Select Genre</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="hip-hop">Hip Hop</option>
             
            </select>

            <label htmlFor="file">Upload Song:</label>
            <input type="file" id="file" name="file" accept="audio/*" required/>

            <button type="submit">Submit</button>
        </form>
      
      </Container>
    </Content>
  )
}

export default CreateSong;
