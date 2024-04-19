import React,{useState} from 'react';
import styled from 'styled-components';
import Content from '../styles/Home/HomeContainer.styled';
import { createSongRequest } from '../redux/feature/createSongSaga';
import { useDispatch } from 'react-redux';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:black;
  

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Three columns with equal width */
    flex-direction: column;
    gap:50px;
    max-width: 600px; /* Adjust max-width as needed */
    width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display:flex;
  flex-direction:column;
 
  
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;


  &:focus{
    outline:none;
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateSong = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    singer: '',
    title: '',
    releaseDate: '',
    description: '',
    genre: '',
    file: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createSongRequest(formData));
    setFormData({
      nameofsinger: '',
      title: '',
      produceddate: '',
      description: '',
      genre: '',
      imageUrl: '',
    });
  };

  return (
    <Content>
      <Container>
        <div>
          <h2 style={{fontSize:'30px', fontWeight:'bold',color:'#FFC100'}}>Create a new song</h2>
        </div>
        
        <div>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor='nameofSinger'>Name of Singer:</Label>
              <Input type="text" id="nameofSinger" name="nameofSinger" placeholder='Enter name' value={formData.nameofsinger} onChange={handleChange}  required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="title">Title:</Label>
              <Input type="text" id="title" name="title" placeholder='title' required value={formData.title} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="produceddate">Release Date:</Label>
              <Input type="date" id="produceddate" name="produceddate" required placeholder='Released date' value={formData.produceddate} onChange={handleChange}/>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="description">Description:</Label>
              <Textarea id="description" name="description" rows="2" required placeholder='description' value={formData.description} onChange={handleChange} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="genre">Genre:</Label>
              <Select id="genre" name="genre" required>
                <option value="">Select Genre</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
                <option value="hip-hop">Hip Hop</option>
                value={formData.genre} onChange={handleChange} 
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="imageUrl">Upload image:</Label>
              <Input type='text' id="imageUrl" name="imageUrl" required placeholder="Paste image address here" value={formData.imageUrl} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </form>
        </div>
      </Container>
    </Content>
  );
};

export default CreateSong;
