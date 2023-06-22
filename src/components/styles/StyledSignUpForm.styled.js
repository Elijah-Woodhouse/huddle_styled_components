import styled from 'styled-components'

export const StyledSignUpForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: grid;
  gap: 20px;
}

label {
  font-weight: bold;
}

input,
  select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

select {
  height: 100px; /* Adjust the height as needed */
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}

`